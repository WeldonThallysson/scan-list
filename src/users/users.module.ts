import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Barcode } from '../barcode/barcode.model';  
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([Users, Barcode])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
