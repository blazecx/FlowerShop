import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Flower } from 'src/flowers/entities/flower.entity';


@Injectable()
export class CategoryService {
  
  constructor(
  @InjectRepository(Category)
  private readonly categoryRepository: Repository<Category>){
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const isExist = await this.categoryRepository.findBy({
      name: createCategoryDto.name
    })
    if(isExist.length)
    throw new BadRequestException("Такая категория уже существует")
    const newCategory = {
      name: createCategoryDto.name
    }

    return await this.categoryRepository.save(newCategory)
  }

  async findAll() {
    return await this.categoryRepository.find({
      relations: {
        flower: true
      }
    }
    );
  }

  async findOne(id: number) {
    const category = await this.categoryRepository.findOne({
      where:{id}
    })
    if(!category) throw new NotFoundException("Категория не найдена")
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categoryRepository.findOne({
      where: { id }
    })
    if(!category) throw new NotFoundException("Категория не найдена")
    return await this.categoryRepository.update(id, updateCategoryDto)
  }

  async remove(id: number) {
   const category = await this.categoryRepository.findOne({
    where: {id}
   });
   if(!category) throw new NotFoundException("Категория не найдена")
   return await this.categoryRepository.delete(id)
  }
}
