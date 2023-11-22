export interface Login {
        username: string;
        password: string
    }

export interface BrandList {
    id: number;
    brand: string;
    description: string;
}

export interface CategoryList {
    id: string;
    category: string;
    description: string;
}
export interface product{
    id:string;
    name:string;
    brand:string ;
    price: string;
    category: string;
    color: string;
    description: string;
    image:string;
}

export interface perodic {
    position: number;
    name: string;
    weight: number;
    symbol: string;
}

    
