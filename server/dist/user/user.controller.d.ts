import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        user: {
            name: string;
            surname: string;
            patronymic: string;
            login: string;
            email: string;
            password: string;
            isAdmin: boolean;
        } & import("./entities/user.entity").User;
        token: string;
    }>;
}
