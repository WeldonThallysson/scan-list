import { BadRequestException, Injectable } from '@nestjs/common';
import { Barcode } from './barcode.model';
import { InjectModel } from '@nestjs/sequelize';
import { IResponseApi } from 'src/interfaces/interface.response.message';
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { Op } from 'sequelize';
import { IParamsBarcode, IParamsRegister } from 'src/interfaces/interface.barcode';
 
const fusoHorarioBrasilia = 'America/Sao_Paulo'; 

@Injectable()
export class BarcodeService {
    constructor(@InjectModel(Barcode) private barcodeModel: typeof Barcode){}

    async create(item: IParamsRegister): Promise<IResponseApi>{
        const {
            code,
            userId
        } = item

        const barcodeExists = await this.barcodeModel.findOne({
            where: {
                code: code
            }
        })

        const dataCurrent = format(toZonedTime(new Date(), fusoHorarioBrasilia), 'yyyy-MM-dd HH:mm');
        
        if(barcodeExists?.dataValues.code){
            throw new BadRequestException("Esse código de barras já foi cadastrado, tente outro código!") 
        }
        
        if(!code){
            throw new BadRequestException('Realize a leitura de um código de barras para cadastrar');
        }
        if(!userId){
            throw new BadRequestException('Informe o id do usuário responsável')
        }
        

        await this.barcodeModel.create({
            code: item.code,
            userId,
            scannedDate: dataCurrent,
            scannedAt: new Date()
          });

        return {
            message: "Código de barra cadastrado com sucesso"
        }
    }

    async findAll(filters: {code?:string | null, description?: string | null}){
        const where: any = {};

        if(filters.description){
            where.description = {[Op.like]: `%${filters.description}%`}
        }

        if(filters.code){
            where.code = {[Op.like]: `%${filters.code}%`};
        }

        const result = await this.barcodeModel.findAll({
            where
        })
        
        return result.length > 0 ? result : [];
    }

    async findDetails(id: number) {
        const result = await this.barcodeModel.findByPk(id);
        return result;
    }


    async update(item: IParamsBarcode): Promise<IResponseApi>{
        const {
            id,
            code,
            userId,
            description
        } = item

        const barcodeExists = await this.barcodeModel.findByPk(id)
    
        if(!barcodeExists){
             throw new BadRequestException("Não foi possível prosseguir, esse código de barras não foi cadastrado.")   
        }     

        if(!userId){
            throw new BadRequestException('Informe o id do usuário responsável')
        }

        await barcodeExists.update({
            ...(code && { code }), 
            ...(userId && { userId }),  
            ...(description && {description})
        });

        return {
            message: "Código de barra atualizado com sucesso"
        }
    }


    async delete(id: number): Promise<IResponseApi> {
        const barcodeExists = await this.barcodeModel.findByPk(id)
        
        if(!barcodeExists){
            throw new BadRequestException("Não foi possível prosseguir, esse código de barras não foi cadastrado.")   
        }

        await barcodeExists.destroy()

        return {
            message: "Código de barras excluido com sucesso"
        }
    
    }
}
