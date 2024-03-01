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
exports.FlowersController = void 0;
const common_1 = require("@nestjs/common");
const flowers_service_1 = require("./flowers.service");
const create_flower_dto_1 = require("./dto/create-flower.dto");
const update_flower_dto_1 = require("./dto/update-flower.dto");
let FlowersController = class FlowersController {
    constructor(flowersService) {
        this.flowersService = flowersService;
    }
    create(createFlowerDto) {
        return this.flowersService.create(createFlowerDto);
    }
    findAll(sortBy, order) {
        return this.flowersService.findAll(sortBy, order);
    }
    searchByName(name) {
        return this.flowersService.searchByName(name);
    }
    findOne(id) {
        return this.flowersService.findOne(+id);
    }
    update(id, updateFlowerDto) {
        return this.flowersService.update(+id, updateFlowerDto);
    }
    remove(id) {
        return this.flowersService.remove(+id);
    }
};
exports.FlowersController = FlowersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_flower_dto_1.CreateFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sortBy')),
    __param(1, (0, common_1.Query)('order')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "searchByName", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flower_dto_1.UpdateFlowerDto]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlowersController.prototype, "remove", null);
exports.FlowersController = FlowersController = __decorate([
    (0, common_1.Controller)('flowers'),
    __metadata("design:paramtypes", [flowers_service_1.FlowersService])
], FlowersController);
//# sourceMappingURL=flowers.controller.js.map