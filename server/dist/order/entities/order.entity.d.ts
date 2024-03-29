import { Cart } from "src/cart/entities/cart.entity";
import { Flower } from "src/flowers/entities/flower.entity";
import { User } from "src/user/entities/user.entity";
export declare class Order {
    id: number;
    user: User;
    status: string;
    timestamp: Date;
    cart: Cart[];
    flower: Flower;
}
