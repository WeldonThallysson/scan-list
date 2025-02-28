import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/users/users.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Users) private usersModel: typeof Users,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersModel.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.get({ plain: true });
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
