import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){

  }
  async create(createUserDto: CreateUserDto) {
    // const password = this.userRepository;
    // const password_repeat = this.userRepository;
    // if (password !== password_repeat) {
    //   throw new BadRequestException('Пароль не совпадает');
    // }
    const existUserEmail = await this.userRepository.findOne({
      where:{
        email:createUserDto.email
      }
    })
    if(existUserEmail) throw new BadRequestException("Такой email уже сущестует!")

    const existUserLogin = await this.userRepository.findOne({
      where:{
        login:createUserDto.login,
      }
    })
    if(existUserLogin) throw new BadRequestException("Такой login уже сущестует!")

    const user = await this.userRepository.save({
      name: createUserDto.name,
      surname: createUserDto.surname,
      patronymic: createUserDto.patronymic,
      login: createUserDto.login,
      email: createUserDto.email,
      password: await argon2.hash(createUserDto.password),
      rules: createUserDto.rules,
      isAdmin: createUserDto.isAdmin
    })
    return {user};
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async findOne(login: string){
    return await this.userRepository.findOne({
      where:{
        login:login
      }
    })
  }
}
