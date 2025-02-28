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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const bcrypt = require("bcrypt");
const validations_utils_1 = require("../utils/validations.utils");
let UsersService = class UsersService {
    usersModel;
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    async findAll() {
        return this.usersModel.findAll();
    }
    async findOne(id) {
        return this.usersModel.findByPk(id);
    }
    async findByEmail(email) {
        return this.usersModel.findOne({ where: { email: email } });
    }
    async create(item) {
        if ((!item.email || !item.password || !item.name)) {
            throw new common_1.BadRequestException('Preencha os campos obrigatórios nome, e-mail e senha.');
        }
        if (!validations_utils_1.ValidationUtils.isValidEmail(item.email)) {
            throw new common_1.BadRequestException('Email inválido');
        }
        if (!validations_utils_1.ValidationUtils.isValidPassword(item.password)) {
            throw new common_1.BadRequestException('Senha deve ter pelo menos 8 caracteres.');
        }
        const hashedPassword = await bcrypt.hash(item.password, 10);
        await this.usersModel.create({
            name: item.name,
            email: item.email,
            password: hashedPassword
        });
        return {
            message: "Cadastro realizado com sucesso"
        };
    }
    async update(item) {
        if (item.id) {
            throw new common_1.BadRequestException("Não");
        }
        const user = item.id && await this.findOne(item.id);
        if (!validations_utils_1.ValidationUtils.isValidEmail(item.email)) {
            throw new common_1.BadRequestException('Email inválido');
        }
        if (!validations_utils_1.ValidationUtils.isValidPassword(item.password)) {
            throw new common_1.BadRequestException('Senha deve ter pelo menos 8 caracteres');
        }
        if (user) {
            user.name = item.name;
            user.email = item.email;
            if (item.password) {
                user.password = await bcrypt.hash(item.password, 10);
            }
            await user.save();
        }
        return {
            message: 'Usuário atualizado com sucesso'
        };
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (user) {
            await user.destroy();
        }
        return {
            message: "Usuário deletado com sucesso"
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.Users)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map