import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module'; 
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { BarcodeModule } from './barcode/barcode.module';
import { Barcode } from './barcode/barcode.model';
import { Users } from './users/users.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: "postgresql://neondb_owner:npg_GlRk6aNmV9rz@ep-crimson-morning-a8vodkqc-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
      autoLoadModels: true,
      synchronize: true,
      models: [Users, Barcode],
    }),
    UsersModule,
    AuthModule, 
    BarcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
