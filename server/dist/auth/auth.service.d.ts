import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(login: string, password: string): Promise<import("../user/entities/user.entity").User>;
    login(user: IUser): Promise<{
        id: string;
        login: string;
        token: string;
    }>;
}
