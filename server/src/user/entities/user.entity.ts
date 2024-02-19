import { Order } from "src/order/entities/order.entity";
import { Column, Entity, PrimaryColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; // ид
    @Column()
    name: string; // имя
    @Column()
    surname: string; // фамилия
    @Column({ nullable: true })
    patronymic: string; // отчество
    @Column({ unique: true })
    login: string; // логин
    @Column({ unique: true })
    email: string; // имайл
    @Column()
    password: string; // пароль епт

    @Column()
    isAdmin: boolean; // проверка на админа
    @OneToMany(() => Order, order => order.user)
    orders: Order[]; // временная колонка хз переделать надо
}
