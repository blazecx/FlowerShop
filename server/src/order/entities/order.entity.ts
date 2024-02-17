import { Cart } from "src/cart/entities/cart.entity";
import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number; // id
    @ManyToOne(() => User, user => user.orders)
    user: User; // юсер
    @Column()
    status: string; // Статус заказа
    @Column()
    timestamp: Date; // Время думаю нахуй его я добавил, пускай в душе не ебут, когда придёт их заказы, далбаебы
    @OneToMany(() => Cart, cart => cart.order)
    cart: Cart[];
}
