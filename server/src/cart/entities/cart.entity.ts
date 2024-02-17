import { Flower } from "src/flowers/entities/flower.entity";
import { Order } from "src/order/entities/order.entity";

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';




@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number; // id
    @ManyToOne(() => Order, order => order.cart)
    order: Order; // доставочка
    @ManyToOne(() => Flower, flower => flower.name)
      flower: Flower; // цвточечки тут я возможно накасячил
    @Column()
    quantity: number; // колво
}
