import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';
export declare class OrderService {
    private readonly OrderRepository;
    constructor(OrderRepository: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<{
        user: {
            id: number;
        };
        status: {
            id: number;
        };
        flower: {
            id: number;
        };
    }>;
    findAll(): Promise<string>;
    findOne(id: number): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
