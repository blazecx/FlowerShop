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
exports.Order = void 0;
const cart_entity_1 = require("../../cart/entities/cart.entity");
const flower_entity_1 = require("../../flowers/entities/flower.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.orders),
    __metadata("design:type", user_entity_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Order.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cart_entity_1.Cart, cart => cart.order),
    __metadata("design:type", Array)
], Order.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => flower_entity_1.Flower, flower => flower.order),
    __metadata("design:type", flower_entity_1.Flower)
], Order.prototype, "flower", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)()
], Order);
//# sourceMappingURL=order.entity.js.map