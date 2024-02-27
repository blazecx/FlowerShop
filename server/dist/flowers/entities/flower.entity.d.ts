import { Category } from "src/category/entities/category.entity";
import { Order } from "src/order/entities/order.entity";
export declare class Flower {
    id: number;
    name: string;
    price: number;
    category: Category;
    quantity: number;
    image: string;
    description: string;
    country: string;
    year: number;
    model: string;
    order: Order[];
}
