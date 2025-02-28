import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/users/users.model';
export declare class AuthService {
    private usersModel;
    private jwtService;
    constructor(usersModel: typeof Users, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(email: string, password: string): Promise<{
        id: any;
        access_token: string;
    }>;
}
