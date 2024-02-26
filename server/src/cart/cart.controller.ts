import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}


  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCartDto: CreateCartDto, @Req() req) {
    return this.cartService.create(createCartDto, +req.user.id);
  }
  
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Req() req) {
    return this.cartService.findAll(+req.user.id);
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }
  
  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
