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
exports.FlowersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flower_entity_1 = require("./entities/flower.entity");
const typeorm_2 = require("typeorm");
let FlowersService = class FlowersService {
    constructor(flowerRepository) {
        this.flowerRepository = flowerRepository;
    }
    async create(createFlowerDto) {
        const flower = await this.flowerRepository.save({
            name: createFlowerDto.name,
            price: createFlowerDto.price,
            quantity: createFlowerDto.quantity,
            category: { id: +createFlowerDto.category },
            image: createFlowerDto.image,
            description: createFlowerDto.description,
            country: createFlowerDto.country,
            year: createFlowerDto.year,
            model: createFlowerDto.model,
        });
        return { flower };
    }
    async findAll() {
        const flower = await this.flowerRepository.find({
            order: {
                id: 'DESC'
            },
            relations: {
                category: true
            }
        });
        return flower;
    }
    async findOne(id) {
        const flower = await this.flowerRepository.findOne({
            where: {
                id
            },
            relations: {
                category: true
            }
        });
        if (!flower)
            throw new common_1.NotFoundException("Цветы не найдены");
        return flower;
    }
    async update(id, updateFlowerDto) {
        const flower = await this.flowerRepository.findOne({
            where: { id }
        });
        if (!flower)
            throw new common_1.NotFoundException("Цветы не найдены");
        return await this.flowerRepository.update(id, updateFlowerDto);
    }
    async remove(id) {
        const flower = await this.flowerRepository.findOne({
            where: { id }
        });
        if (!flower)
            throw new common_1.NotFoundException("Цветы не найдены");
        return await this.flowerRepository.delete(id);
    }
};
exports.FlowersService = FlowersService;
exports.FlowersService = FlowersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flower_entity_1.Flower)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FlowersService);
//# sourceMappingURL=flowers.service.js.map