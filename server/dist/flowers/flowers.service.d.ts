import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { Flower } from './entities/flower.entity';
import { Repository } from 'typeorm';
export declare class FlowersService {
    private readonly flowerRepository;
    constructor(flowerRepository: Repository<Flower>);
    create(createFlowerDto: CreateFlowerDto): Promise<{
        flower: {
            name: string;
            price: number;
            quantity: number;
            image: string;
            description: string;
            country: string;
            year: number;
            model: string;
        } & Flower;
    }>;
    findAll(): Promise<Flower[]>;
    findOne(id: number): Promise<Flower>;
    update(id: number, updateFlowerDto: UpdateFlowerDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
