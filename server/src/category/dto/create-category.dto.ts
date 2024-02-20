import { IsNotEmpty, IsOptional } from "class-validator";


export class CreateCategoryDto {
    @IsNotEmpty()
    name: string; // название категории
}
