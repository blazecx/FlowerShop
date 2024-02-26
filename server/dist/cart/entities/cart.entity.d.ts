import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";
export declare class Cart {
    id: number;
    user: User;
    order: Order;
    flower: Flower;
    quantity: number;
}
