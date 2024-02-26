import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";

export class CreateCartDto {
    userId: User;
    // cart_id: Order; // id из корзины товара
    flower: Flower; // id из цвтов
    quantity: number; // колво

}
