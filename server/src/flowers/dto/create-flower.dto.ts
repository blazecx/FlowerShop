import { Category } from "src/category/entities/category.entity";

export class CreateFlowerDto {
    id: number; // id
    name: string; // название
    price: number; // цена
    category_id: Category; // категория
    quantity: number; // кол-во 
    image: string; // картинка 
    description: string; // описание 
    country: string; // страна
    year: number; // год
    model: string; // модель
}
