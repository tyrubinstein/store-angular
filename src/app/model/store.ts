
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
    constructor(ManagerName: string, storeName: string, City: string, cellOftheStore: string, Cell: string, address: string, email: string, password: string) {
        this.Address = address;
        this.Email = email;
        this.City = City
        this.PasswordUser = password;
        this.Cell = Cell;
        this.cellOftheStore = cellOftheStore;
        this.StoreName = storeName;
        this.ManagerName = ManagerName;
    }
}
export class Login {
    PasswordUser: string
    Email: string
    constructor(PasswordUser: string, email: string,) {
        this.PasswordUser = PasswordUser
        this.Email = email
    }

}
export class FoundStores {
    StoreName: string
    Address: string
    City: string
    ManagerName: string
    cellOftheStore: string
    constructor(StoreName: string,
        Address: string,
        City: string,
        ManagerName: string,
        cellOftheStore: string,
    ) {
        this.Address = Address
        this.City = City
        this.ManagerName = ManagerName;
        this.StoreName = StoreName;
        this.cellOftheStore = cellOftheStore;
    }
}


export class StoresThatHaveTheCloth {
    StoreName: string
    Address: string
    City: string
    ManagerName: string
    cellOftheStore: string
    constructor(StoreName: string,
        Address: string,
        City: string,
        ManagerName: string,
        cellOftheStore: string) {
        this.Address = Address;
        this.City = City;
        this.ManagerName = ManagerName;
        this.StoreName = StoreName;
        this.cellOftheStore = cellOftheStore;
    }

}

