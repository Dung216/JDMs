//Du lieu chung
export type CarType = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
    createdAt: string;
};

//Them moi du lieu
export type CreateCarType = {
    name: string;
    image: string;
    description: string;
    price: string;
    createdAt: string;

};

export type UpdateCarType = {
    name?: string;
    image?: string;
    description?: string;
    price?: string;
    createdAt?: string;
};