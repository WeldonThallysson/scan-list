import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Request, Req } from '@nestjs/common';
import { BarcodeService } from './barcode.service';
import { Barcode } from './barcode.model';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { IParamsBarcode, IParamsRegister } from 'src/interfaces/interface.barcode';
import { JwtAuthGuard } from 'src/guard/jwt.guard';

interface IRequest { 
  user: {
    id: number,
     email: string
  }
}
@UseGuards(JwtAuthGuard)
@Controller('barcodes')

export class BarcodeController {
  constructor(private readonly barcodeService: BarcodeService) {}

  @Post()
  async create(@Request() req: IRequest, @Body() item: IParamsRegister): Promise<IResponseApi> {
    const data = {
      ...item,
      userId: req.user.id
    }
    return this.barcodeService.create(data);
  }

  @Get()
  async findAll(
    @Request() req: IRequest,
    @Query('code') code?: string,
    @Query('description') description?: string
  ) {

    return this.barcodeService.findAll({userId: req.user.id, code, description });
  }

  @Get(':id')
  async findDetails(@Param('id') id: number) {
    return this.barcodeService.findDetails(id);
  }

  @Put()
  async update(@Request() req: IRequest,  @Body() item: IParamsBarcode): Promise<IResponseApi> {
    
    const data = {
      id: item.id,
      code: item.code,
      userId: req.user.id,
      description: item.description
    }
    return this.barcodeService.update(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<IResponseApi> {
    return this.barcodeService.delete(id);
  }
}
