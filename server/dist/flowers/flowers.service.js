"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowersService = void 0;
const common_1 = require("@nestjs/common");
let FlowersService = class FlowersService {
    create(createFlowerDto) {
        return 'This action adds a new flower';
    }
    findAll() {
        return `This action returns all flowers`;
    }
    findOne(id) {
        return `This action returns a #${id} flower`;
    }
    update(id, updateFlowerDto) {
        return `This action updates a #${id} flower`;
    }
    remove(id) {
        return `This action removes a #${id} flower`;
    }
};
exports.FlowersService = FlowersService;
exports.FlowersService = FlowersService = __decorate([
    (0, common_1.Injectable)()
], FlowersService);
//# sourceMappingURL=flowers.service.js.map