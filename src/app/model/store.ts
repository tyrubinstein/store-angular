
export class Store {
    StoreID: number
    StoreName: string
    Address: string
    City: string
    ManagerName: string
    Cell: string
    Email: string
    PasswordUser: string
    cellOftheStore: string
  
}
export class Login {
    PasswordUser: string
    Email: string
    constructor(PasswordUser: string, email: string,) {
        this.PasswordUser = PasswordUser
        this.Email = email
    }

}


export class StoresThatHaveTheCloth {
    StoreName: string
    Address: string
    City: string
    ManagerName: string
    cellOftheStore: string

}

