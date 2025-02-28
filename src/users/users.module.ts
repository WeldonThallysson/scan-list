import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.model';
import { Barcode } from 'src/barcode/barcode.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Users, Barcode]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
