import { Category } from "src/category/entities/category.entity";
export declare class CreateFlowerDto {
    name: string;
    price: number;
    category_id: Category;
    quantity: number;
    image: string;
    description: string;
    country: string;
    year: number;
    model: string;
}
