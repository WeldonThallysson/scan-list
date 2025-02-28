"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("@nestjs/config");
const barcode_module_1 = require("./barcode/barcode.module");
const barcode_model_1 = require("./barcode/barcode.model");
const users_model_1 = require("./users/users.model");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                uri: "postgresql://neondb_owner:npg_HAKtmVSE1u7Q@ep-summer-tooth-a8djilu9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
                autoLoadModels: true,
                synchronize: true,
                models: [users_model_1.Users, barcode_model_1.Barcode],
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            barcode_module_1.BarcodeModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map