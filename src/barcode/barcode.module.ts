import { Module } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { BarcodeController } from './barcode.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Barcode } from './barcode.model';
import { Users } from 'src/users/users.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Barcode, Users])
  ],
  controllers: [BarcodeController],
  providers: [BarcodeService],
})

export class BarcodeModule {}
