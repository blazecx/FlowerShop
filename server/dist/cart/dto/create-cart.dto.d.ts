import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";
export declare class CreateCartDto {
    id: number;
    cart_id: Order;
    flower_id: Flower;
    quantity: number;
}
