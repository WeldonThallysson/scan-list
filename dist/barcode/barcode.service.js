"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeService = void 0;
const common_1 = require("@nestjs/common");
const barcode_model_1 = require("./barcode.model");
const sequelize_1 = require("@nestjs/sequelize");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const sequelize_2 = require("sequelize");
const fusoHorarioBrasilia = 'America/Sao_Paulo';
let BarcodeService = class BarcodeService {
    barcodeModel;
    constructor(barcodeModel) {
        this.barcodeModel = barcodeModel;
    }
    async create(item) {
        const { code, userId } = item;
        const barcodeExists = await this.barcodeModel.findOne({
            where: {
                code: code
            }
        });
        const dataCurrent = (0, date_fns_1.format)((0, date_fns_tz_1.toZonedTime)(new Date(), fusoHorarioBrasilia), 'yyyy-MM-dd HH:mm');
        if (barcodeExists?.code) {
            throw new common_1.BadRequestException("Esse código de barras já foi cadastrado, tente outro código!");
        }
        if (code) {
            throw new common_1.BadRequestException('Realize a leitura de um código de barras para cadastrar');
        }
        if (userId) {
            throw new common_1.BadRequestException('Realize a leitura de um código de barras para cadastrar');
        }
        await this.barcodeModel.create({
            code: item.code,
            userId,
            scannedDate: dataCurrent,
            scannedAt: new Date()
        });
        return {
            message: "Código de barra cadastrado com sucesso"
        };
    }
    async findAll(filters) {
        const where = {};
        if (filters.description) {
            where.description = { [sequelize_2.Op.like]: `%${filters.description}` };
        }
        if (filters.code) {
            where.code = { [sequelize_2.Op.like]: `%${filters.code}%` };
        }
        const result = await this.barcodeModel.findAll({
            where
        });
        return result;
    }
    async findDetails(id) {
        const result = await this.barcodeModel.findByPk(id);
        return result;
    }
    async update(item) {
        const { id, code, userId, description } = item;
        const barcodeExists = await this.barcodeModel.findByPk(id);
        const dataCurrent = (0, date_fns_1.format)((0, date_fns_tz_1.toZonedTime)(new Date(), fusoHorarioBrasilia), 'yyyy-MM-dd HH:mm');
        if (!barcodeExists) {
            throw new common_1.BadRequestException("Não foi possível prosseguir, esse código de barras não foi cadastrado.");
        }
        if (code) {
            throw new common_1.BadRequestException('Realize a leitura de um código de barras para cadastrar');
        }
        if (userId) {
            throw new common_1.BadRequestException('Realize a leitura de um código de barras para cadastrar');
        }
        await barcodeExists.update({
            ...(code && { code }),
            ...(userId && { userId }),
            ...(description && { description })
        });
        return {
            message: "Código de barra atualizado com sucesso"
        };
    }
    async delete(id) {
        const barcodeExists = await this.barcodeModel.findByPk(id);
        if (!barcodeExists) {
            throw new common_1.BadRequestException("Não foi possível prosseguir, esse código de barras não foi cadastrado.");
        }
        await barcodeExists.destroy();
        return {
            message: "Código de barras excluido com sucesso"
        };
    }
};
exports.BarcodeService = BarcodeService;
exports.BarcodeService = BarcodeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(barcode_model_1.Barcode)),
    __metadata("design:paramtypes", [Object])
], BarcodeService);
//# sourceMappingURL=barcode.service.js.map