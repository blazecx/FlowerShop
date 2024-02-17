import { Order } from "src/order/entities/order.entity";
export declare class User {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    login: string;
    email: string;
    password: string;
    rules: boolean;
    isAdmin: boolean;
    orders: Order[];
}
