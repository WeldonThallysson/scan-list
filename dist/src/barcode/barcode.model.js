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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Barcode = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_model_1 = require("../users/users.model");
let Barcode = class Barcode extends sequelize_typescript_1.Model {
    id = 0;
    code;
    description;
    scannedDate;
    scannedAt;
    userId;
    user;
};
exports.Barcode = Barcode;
__decorate([
    (0, sequelize_typescript_1.Column)({ primaryKey: true, autoIncrement: true, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Object)
], Barcode.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Barcode.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: true }),
    __metadata("design:type", String)
], Barcode.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Barcode.prototype, "scannedDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.DATE }),
    __metadata("design:type", Date)
], Barcode.prototype, "scannedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_model_1.Users),
    (0, sequelize_typescript_1.Column)({ allowNull: false, type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Barcode.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => users_model_1.Users),
    __metadata("design:type", users_model_1.Users)
], Barcode.prototype, "user", void 0);
exports.Barcode = Barcode = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'barcodes', timestamps: true })
], Barcode);
//# sourceMappingURL=barcode.model.js.map