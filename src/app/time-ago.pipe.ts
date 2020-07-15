// import {Observable} from 'rxjs/Observable';
// import {AsyncPipe} from '@angular/common';
// import { Pipe, ChangeDetectorRef } from '@angular/core';
// import 'rxjs/add/observable/interval';
// import 'rxjs/Rx';
// @Pipe({
//     name: 'timeAgo',
//     pure: false
// })
// export class TimeAgoPipe extends AsyncPipe
// {
//     value:Date;
//     timer:Observable<string>;

//     constructor(ref:ChangeDetectorRef)
//     {
//         super(ref);
//     }

//     transform(obj:any, args?:any[]):any
//     {debugger
//         if (obj instanceof Date)
//         {
//             this.value = obj;

//             if(!this.timer)
//             {
//                 this.timer = this.getObservable();
//             }

//             return super.transform(this.timer);
//         }

//         return super.transform(obj);
//     }

//     private getObservable()
//     {
//         return Observable.interval(1000).startWith(0).map(()=>
//         {
//             var result:string;
//             // current time
//             let now = new Date().getTime();

//             // time since message was sent in seconds
//             let delta = (now - this.value.getTime()) / 1000;

//             // format string
//             if (delta < 10)
//             {
//                 result = 'jetzt';
//             }
//             else if (delta < 60)
//             { // sent in last minute
//                 result = 'vor ' + Math.floor(delta) + ' Sekunden';
//             }
//             else if (delta < 3600)
//             { // sent in last hour
//                 result = 'vor ' + Math.floor(delta / 60) + ' Minuten';
//             }
//             else if (delta < 86400)
//             { // sent on last day
//                 result = 'vor ' + Math.floor(delta / 3600) + ' Stunden';
//             }
//             else
//             { // sent more than one day ago
//                 result = 'vor ' + Math.floor(delta / 86400) + ' Tagen';
//             }
//             return result;
//         });
//     };
// }
import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";
@Pipe({
	name:'timeAgo',
	pure:false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {
	private timer: number;
	constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone) {}
	transform(value:Date) {
		this.removeTimer();
		let d = new Date(value);
		let now = new Date();
		let seconds = Math.round(Math.abs((now.getTime() - d.getTime())/1000));
		let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) *1000;
		this.timer = this.ngZone.runOutsideAngular(() => {
			if (typeof window !== 'undefined') {
				return window.setTimeout(() => {
					this.ngZone.run(() => this.changeDetectorRef.markForCheck());
				}, timeToUpdate);
			}
			return null;
		});
		let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days/30.416));
		let years = Math.round(Math.abs(days/365));
		if (Number.isNaN(seconds)){
			return '';
		} else if (seconds <= 45) {
			return 'לפני כמה שניות';
		} else if (seconds <= 90) {
			return 'לפני דקה';
		} else if (minutes <= 45) {
			return "לפני "+ minutes + ' דקות';
		} else if (minutes <= 90) {
			return 'לפני שעה ';
		} else if (hours <= 22) {
			return   "לפני "+ hours + ' שעות';
		} else if (hours <= 36) {
			return 'לפני יום';
		} else if (days <= 25) {
			return  "לפני "+ days + ' ימים';
		} else if (days <= 45) {
			return 'לפני חודש';
		} else if (days <= 345) {
			return  "לפני "+ months + ' חודשים' ;
		} else if (days <= 545) {
			return 'לפני שנה';
		} else { // (days > 545)
			return   "לפני"+ years + ' שנים'  ;
		}
	}
	ngOnDestroy(): void {
		this.removeTimer();
	}
	private removeTimer() {
		if (this.timer) {
			window.clearTimeout(this.timer);
			this.timer = null;
		}
	}
	private getSecondsUntilUpdate(seconds:number) {
		let min = 60;
		let hr = min * 60;
		let day = hr * 24;
		if (seconds < min) { // less than 1 min, update every 2 secs
			return 2;
		} else if (seconds < hr) { // less than an hour, update every 30 secs
			return 30;
		} else if (seconds < day) { // less then a day, update every 5 mins
			return 300;
		} else { // update every hour
			return 3600;
		}
	}
}