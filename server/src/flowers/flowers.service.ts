import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { UpdateFlowerDto } from './dto/update-flower.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flower } from './entities/flower.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlowersService {
  constructor(
    @InjectRepository(Flower) private readonly flowerRepository: Repository<Flower>
    ){}

  async create(createFlowerDto: CreateFlowerDto) {
    const flower = await this.flowerRepository.save({
    name: createFlowerDto.name,
    price: createFlowerDto.price,
    quantity: createFlowerDto.quantity,
    category: {id: +createFlowerDto.category},
    image: createFlowerDto.image,
    description: createFlowerDto.description,
    country: createFlowerDto.country,
    year: createFlowerDto.year,
    model: createFlowerDto.model,
    })
    return {flower}
  }

  async findAll() {
    const flower = await this.flowerRepository.find({
      order:{
        id: 'DESC'
      },
      relations:{
        category: true
      }
    })
    return flower;
  }

  async findOne(id: number) {
    const flower = await this.flowerRepository.findOne({
      where: {
        id
      },
      relations:{
        category: true
      }
    })
    if(!flower) throw new NotFoundException("Цветы не найдены")
    return flower;
  }

  async update(id: number, updateFlowerDto: UpdateFlowerDto) {
    const flower = await this.flowerRepository.findOne({
    where: {id}
    })
    if(!flower) throw new NotFoundException("Цветы не найдены")
    return await this.flowerRepository.update(id, updateFlowerDto);
  }

  async remove(id: number) {
    const flower = await this.flowerRepository.findOne({
      where: {id}
      })
      if(!flower) throw new NotFoundException("Цветы не найдены")
    return await this.flowerRepository.delete(id);
  }
}
