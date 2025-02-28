import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '2637b65dfb3e861a1a1ba5fac1c21b60db2896c3454abd8176680eebe5978f0c8d2ce21595afd36032c3ee3e07e56818f6a782b6e7dc936b5cf7f782711bb034',  
    });
  }

  async validate(payload: any) {
    if (!payload) {
      throw new UnauthorizedException('Token inválido');
    }
    return { id: payload.sub, email: payload.email };
  }
}
