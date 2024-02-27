import { Flower } from "src/flowers/entities/flower.entity";
import { User } from "src/user/entities/user.entity";
export declare class CreateOrderDto {
    client_id: User;
    status: string;
    flower: Flower;
    timestamp: Date;
}
