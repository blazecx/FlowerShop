import { FlowersService } from './flowers.service';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
export declare class FlowersController {
    private readonly flowersService;
    constructor(flowersService: FlowersService);
    create(createFlowerDto: CreateFlowerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFlowerDto: UpdateFlowerDto): string;
    remove(id: string): string;
}
