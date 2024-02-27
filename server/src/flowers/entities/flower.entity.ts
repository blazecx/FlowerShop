import { Category } from "src/category/entities/category.entity";
import { Order } from "src/order/entities/order.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';


@Entity()
export class Flower {
    @PrimaryGeneratedColumn()
    id: number; // id
    @Column()
    name: string; // название
    @Column()
    price: number; // цена
    @ManyToOne(() => Category, category => category.flower)
    category: Category; //пока хуй знает поменяю, не передаёт пока что котигорию ид
    @Column()
    quantity: number; // кол-во
    @Column()
    image: string; // картинка
    @Column()
    description: string; // описание
    @Column()
    country: string; // страна 
    @Column()
    year: number; // год
    @Column()
    model: string; // модель
    @OneToMany(() => Order, order => order.flower)
    order: Order[];
}
