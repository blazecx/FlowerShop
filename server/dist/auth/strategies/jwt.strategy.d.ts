import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/types/types';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configServer;
    constructor(configServer: ConfigService);
    validate(user: IUser): Promise<{
        id: string;
        login: string;
        email: string;
        name: string;
        surname: string;
        patronymic: string;
    }>;
}
export {};
