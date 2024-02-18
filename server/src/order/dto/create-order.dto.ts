import { User } from "src/user/entities/user.entity";


export class CreateOrderDto {
    client_id: User; // юсер
    status: string; // Статус заказа
    timestamp: Date; // Время думаю нахуй его я добавил, пускай в душе не ебут, когда придёт их заказы, далбаебы
}
