import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';




@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number; // id
    @ManyToOne(() => User, user => user.cart)
    user: User; // доставочка
    @ManyToOne(() => Order, order => order.cart)
    order: Order; // доставочка
    @ManyToOne(() => Flower, flower => flower.name)
      flower: Flower; // цвточечки тут я возможно накасячил
    @Column({default: 1})
    quantity: number; // колво
}
