import { User } from "src/user/entities/user.entity";
export declare class CreateOrderDto {
    id: number;
    client_id: User;
    status: string;
    timestamp: Date;
}
