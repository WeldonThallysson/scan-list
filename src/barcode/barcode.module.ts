import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Barcode } from '../barcode/barcode.model';
import { Users } from '../users/users.model';
import { BarcodeService } from './barcode.service';
import { BarcodeController } from './barcode.controller';

@Module({
  imports: [SequelizeModule.forFeature([Barcode, Users])],
  controllers: [BarcodeController],
  providers: [BarcodeService],
})
export class BarcodeModule {}
