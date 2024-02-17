import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";
export declare class Cart {
    id: number;
    order: Order;
    flower: Flower;
    quantity: number;
}
