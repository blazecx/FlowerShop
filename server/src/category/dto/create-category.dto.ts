import { IsNotEmpty, IsOptional } from "class-validator";
import { Flower } from "src/flowers/entities/flower.entity";

export class CreateCategoryDto {
    @IsNotEmpty()
    name: string; // название категории
    @IsOptional() 
    flower?: Flower
}
