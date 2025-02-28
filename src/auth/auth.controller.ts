import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() item: { email: string; password: string }): Promise<{ id: number; access_token: string }> {
        return await this.authService.login(item.email, item.password);
    }
}
