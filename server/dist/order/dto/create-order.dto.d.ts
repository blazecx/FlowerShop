import { User } from "src/user/entities/user.entity";
export declare class CreateOrderDto {
    client_id: User;
    status: string;
    timestamp: Date;
}
