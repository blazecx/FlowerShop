import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
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
    }>;
    findOne(login: string): Promise<User>;
}
