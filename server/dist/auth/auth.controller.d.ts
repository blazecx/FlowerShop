import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        id: string;
        login: string;
        token: string;
    }>;
    getProfile(req: any): any;
}
