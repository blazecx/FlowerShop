import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
export declare class FlowersService {
    create(createFlowerDto: CreateFlowerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFlowerDto: UpdateFlowerDto): string;
    remove(id: number): string;
}
