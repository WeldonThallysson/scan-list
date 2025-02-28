import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(item: {
        email: string;
        password: string;
    }): Promise<{
        id: number;
        access_token: string;
    }>;
}
