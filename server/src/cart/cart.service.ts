import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
  constructor(
   @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>
  ){}
  
   async create(createCartDto: CreateCartDto, id: number) {
    const cart = {
      user: {id},
      flower: {id: +createCartDto.flower} ,

      quantity: createCartDto.quantity
    }
    if (!cart) throw new BadRequestException('Такое уже есть')
    return await this.cartRepository.save(cart);
  }

   async findAll(id: number) {
    const cart = await this.cartRepository.find({
      where:{
        user: { id }
      },
      order:{
        id: 'DESC'
      }
});
    return cart;
  }

  async findOne(id: number) {
    const cart = await this.cartRepository.findOne({
      where:{
        id
      },
      relations:{
        user: true
      }
    })
    if (!cart) throw new NotFoundException('Такого нема')
    return cart;
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    const cart = await this.cartRepository.findOne({
      where:{
        id
      }
    })
    if (!cart) throw new NotFoundException('Такого нема')
    return await this.cartRepository.update(id, updateCartDto);
  }

  async remove(id: number) {
    const cart = await this.cartRepository.findOne({
      where:{
        id
      }
    })
    if (!cart) throw new NotFoundException('Такого нема')
    return await this.cartRepository.delete(id)
  }
}

// @Injectable()
// export class CartService {
//   constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) { }

//   async createCart(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart> {
//     const newCart = await this.cartModel.create({
//       userId,
//       items: [{ ...itemDTO, subTotalPrice }],
//       totalPrice
//     });
//     return newCart;
//   }

//   async getCart(userId: string): Promise<CartDocument> {
//     const cart = await this.cartModel.findOne({ userId });
//     return cart;
//   }

//   async deleteCart(userId: string): Promise<Cart> {
//     const deletedCart = await this.cartModel.findOneAndRemove({ userId });
//     return deletedCart;
//   }

//   private recalculateCart(cart: CartDocument) {
//     cart.totalPrice = 0;
//     cart.items.forEach(item => {
//       cart.totalPrice += (item.quantity * item.price);
//     })
//   }

//   async addItemToCart(userId: string, itemDTO: ItemDTO): Promise<Cart> {
//     const { productId, quantity, price } = itemDTO;
//     const subTotalPrice = quantity * price;

//     const cart = await this.getCart(userId);

//     if (cart) {
//       const itemIndex = cart.items.findIndex((item) => item.productId == productId);

//       if (itemIndex > -1) {
//         let item = cart.items[itemIndex];
//         item.quantity = Number(item.quantity) + Number(quantity);
//         item.subTotalPrice = item.quantity * item.price;

//         cart.items[itemIndex] = item;
//         this.recalculateCart(cart);
//         return cart.save();
//       } else {
//         cart.items.push({ ...itemDTO, subTotalPrice });
//         this.recalculateCart(cart);
//         return cart.save();
//       }
//     } else {
//       const newCart = await this.createCart(userId, itemDTO, subTotalPrice, price);
//       return newCart;
//     }
//   }

//   async removeItemFromCart(userId: string, productId: string): Promise<any> {
//     const cart = await this.getCart(userId);

//     const itemIndex = cart.items.findIndex((item) => item.productId == productId);

//     if (itemIndex > -1) {
//       cart.items.splice(itemIndex, 1);
//       return cart.save();
//     }
//   }
// }