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
exports.BarcodeController = void 0;
const common_1 = require("@nestjs/common");
const barcode_service_1 = require("./barcode.service");
const barcode_model_1 = require("./barcode.model");
const jwt_guard_1 = require("../guard/jwt.guard");
let BarcodeController = class BarcodeController {
    barcodeService;
    constructor(barcodeService) {
        this.barcodeService = barcodeService;
    }
    async create(item) {
        return this.barcodeService.create(item);
    }
    async findAll(code, description) {
        return this.barcodeService.findAll({ code, description });
    }
    async findDetails(id) {
        return this.barcodeService.findDetails(id);
    }
    async update(item) {
        const data = {
            id: item.id,
            code: item.code,
            userId: item.userId,
            description: item.description
        };
        return this.barcodeService.update(data);
    }
    async delete(id) {
        return this.barcodeService.delete(id);
    }
};
exports.BarcodeController = BarcodeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [barcode_model_1.Barcode]),
    __metadata("design:returntype", Promise)
], BarcodeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Query)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], BarcodeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BarcodeController.prototype, "findDetails", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BarcodeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BarcodeController.prototype, "delete", null);
exports.BarcodeController = BarcodeController = __decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('barcodes'),
    __metadata("design:paramtypes", [barcode_service_1.BarcodeService])
], BarcodeController);
//# sourceMappingURL=barcode.controller.js.map