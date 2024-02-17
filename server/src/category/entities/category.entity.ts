import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Flower } from 'src/flowers/entities/flower.entity';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number; // id
    @Column()
    name: string; // название категории 
    @OneToMany(() => Flower, flower => flower.category)
    flower: Flower;
}
