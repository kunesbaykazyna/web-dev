export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    link: string;
    image: string;
    images: string[];

    likes: number;
    categoryId: number;
}