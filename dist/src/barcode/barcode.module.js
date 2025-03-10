"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarcodeModule = void 0;
const common_1 = require("@nestjs/common");
const barcode_service_1 = require("./barcode.service");
const barcode_controller_1 = require("./barcode.controller");
const sequelize_1 = require("@nestjs/sequelize");
const barcode_model_1 = require("./barcode.model");
const users_model_1 = require("../users/users.model");
let BarcodeModule = class BarcodeModule {
};
exports.BarcodeModule = BarcodeModule;
exports.BarcodeModule = BarcodeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([barcode_model_1.Barcode, users_model_1.Users])
        ],
        controllers: [barcode_controller_1.BarcodeController],
        providers: [barcode_service_1.BarcodeService],
    })
], BarcodeModule);
//# sourceMappingURL=barcode.module.js.map