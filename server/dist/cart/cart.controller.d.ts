import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    create(createCartDto: CreateCartDto, req: any): Promise<{
        user: {
            id: number;
        };
        flower: {
            id: number;
        };
        quantity: number;
    } & import("./entities/cart.entity").Cart>;
    findAll(req: any): Promise<import("./entities/cart.entity").Cart[]>;
    findOne(id: string): Promise<import("./entities/cart.entity").Cart>;
    update(id: string, updateCartDto: UpdateCartDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
