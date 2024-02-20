import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<{
        user: {
            name: string;
            surname: string;
            patronymic: string;
            login: string;
            email: string;
            password: string;
            isAdmin: boolean;
        } & User;
        token: string;
    }>;
    findOne(login: string): Promise<User>;
}
