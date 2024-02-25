import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Category } from "src/category/entities/category.entity";

export class CreateFlowerDto {
    @IsNotEmpty()
    name: string; // название
    @IsNotEmpty()
    @IsNumber()
    price: number; // цена
    @IsNotEmpty()
    category: Category; // категория
    @IsNotEmpty()
    @IsNumber()
    quantity: number; // кол-во
    @IsNotEmpty() 
    image: string; // картинка
    @IsNotEmpty() 
    description: string; // описание
    @IsNotEmpty() 
    country: string; // страна
    @IsNotEmpty()
    @IsNumber()
    year: number; // год
    @IsNotEmpty()
    model: string; // модель
}
