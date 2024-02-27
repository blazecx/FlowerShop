import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly OrderRepository: Repository<Order>
   ){}
  async create(createOrderDto: CreateOrderDto) {
    const Order = {
      user: {id: +createOrderDto.client_id},
      status: {id: +createOrderDto.status} ,
      flower:{id: +createOrderDto.flower}
    }
    return Order;
  }

  async findAll() {
    return `This action returns all order`;
  }

  async findOne(id: number) {
    const Order = await this.OrderRepository.findOne({
      where:{
        id
      }
    })
    if (!Order) throw new NotFoundException('такого нема')
    return Order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const Order = await this.OrderRepository.findOne({
      where:{
        id
      }
    })
    if (!Order) throw new NotFoundException('Такого нема')
    return await this.OrderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    const Order = await this.OrderRepository.findOne({
      where:{
        id
      }
    })
    if (!Order) throw new NotFoundException('Такого нема')
    return await this.OrderRepository.delete(id)
  }
}
