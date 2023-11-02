export interface Login {
        username: string;
        password: string

    }

    export interface User {
        name: string;
        email: string;
    }
    export interface product{
        name: string;
        price: string;
        category: string;
        color: string;
        description: string;
        image:string;
        id:number;
   }

   export interface BRANDS {
    id:number;
    serialNo:string;
   name:string;
    products:string;
}


export interface perodic {
    position: number;
    name: string;
    weight: number;
    symbol: string;
}

    
