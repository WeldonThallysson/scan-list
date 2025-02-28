import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from 'src/guard/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secret: "2637b65dfb3e861a1a1ba5fac1c21b60db2896c3454abd8176680eebe5978f0c8d2ce21595afd36032c3ee3e07e56818f6a782b6e7dc936b5cf7f782711bb034",
      signOptions: { expiresIn: '1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
