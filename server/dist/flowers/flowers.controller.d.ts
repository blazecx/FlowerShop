import { FlowersService } from './flowers.service';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
export declare class FlowersController {
    private readonly flowersService;
    constructor(flowersService: FlowersService);
    create(createFlowerDto: CreateFlowerDto): Promise<{
        flower: {
            name: string;
            price: number;
            quantity: number;
            category: {
                id: number;
            };
            image: string;
            description: string;
            country: string;
            year: number;
            model: string;
        } & import("./entities/flower.entity").Flower;
    }>;
    findAll(): Promise<import("./entities/flower.entity").Flower[]>;
    findOne(id: string): Promise<import("./entities/flower.entity").Flower>;
    update(id: string, updateFlowerDto: UpdateFlowerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
