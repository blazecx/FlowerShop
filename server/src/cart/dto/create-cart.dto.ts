import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";

export class CreateCartDto {
    cart_id: Order; // id из корзины товара
    flower_id: Flower; // id из цвтов
    quantity: number; // колво
}
