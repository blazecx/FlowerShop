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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const argon2 = require("argon2");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const existUserEmail = await this.userRepository.findOne({
            where: {
                email: createUserDto.email
            }
        });
        if (existUserEmail)
            throw new common_1.BadRequestException("Такой email уже сущестует!");
        const existUserLogin = await this.userRepository.findOne({
            where: {
                login: createUserDto.login,
            }
        });
        if (existUserLogin)
            throw new common_1.BadRequestException("Такой login уже сущестует!");
        const user = await this.userRepository.save({
            name: createUserDto.name,
            surname: createUserDto.surname,
            patronymic: createUserDto.patronymic,
            login: createUserDto.login,
            email: createUserDto.email,
            password: await argon2.hash(createUserDto.password),
            isAdmin: createUserDto.isAdmin
        });
        return { user };
    }
    async findOne(login) {
        return await this.userRepository.findOne({
            where: {
                login
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map