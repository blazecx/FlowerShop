import { Flower } from "src/flowers/entities/flower.entity";
import { User } from "src/user/entities/user.entity";
export declare class CreateCartDto {
    userId: User;
    flower: Flower;
    quantity: number;
}
