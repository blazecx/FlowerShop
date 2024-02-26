import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: Repository<Cart>);
    create(createCartDto: CreateCartDto, id: number): Promise<{
        user: {
            id: number;
        };
        flower: {
            id: number;
        };
        quantity: number;
    } & Cart>;
    findAll(id: number): Promise<Cart[]>;
    findOne(id: number): Promise<Cart>;
    update(id: number, updateCartDto: UpdateCartDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
