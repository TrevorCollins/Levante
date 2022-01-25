export type IMenu = {
    id: number;
    name: string;
    title: string;
    items: IItem[];
};

export type IItem = {
    id: number;
    name: string;
    title: string;
    description: string;
    menuID: number;
    price: number;
    veg?: boolean;
};