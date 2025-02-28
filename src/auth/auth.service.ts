import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
 constructor(
    private usersService: UsersService, 
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
  
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; 
      return result;
    } else {
      throw new UnauthorizedException('Email ou senha inválidos');
    }
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id, email: user.email };

    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
