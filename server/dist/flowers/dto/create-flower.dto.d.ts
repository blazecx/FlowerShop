import { Category } from "src/category/entities/category.entity";
export declare class CreateFlowerDto {
    name: string;
    price: number;
    category: Category;
    quantity: number;
    image: string;
    description: string;
    country: string;
    year: number;
    model: string;
}
