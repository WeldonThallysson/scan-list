import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { Barcode } from './barcode.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IParamsBarcode } from 'src/interfaces/interface.barcode';
import { JwtAuthGuard } from 'src/guard/jwt.guard';

@UseGuards(JwtAuthGuard)
@Controller('barcodes')
export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Post()
  async create(@Body() item: Barcode): Promise<IResponseApi> {
    return this.barcodeService.create(item);
  }

  @Get()
  async findAll(
    @Query('code') code?: string,
    @Query('description') description?: string
  ) {
    return this.barcodeService.findAll({ code, description });
  }

  @Get(':id')
  async findDetails(@Param('id') id: number) {
    return this.barcodeService.findDetails(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() item: IParamsBarcode): Promise<IResponseApi> {
    const data = {
      id: item.id,
      code: item.code,
      userId: item.userId,
      description: item.description
    }
    return this.barcodeService.update(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<IResponseApi> {
    return this.barcodeService.delete(id);
  }
}
