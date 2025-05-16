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
exports.ConsumoEnergiaController = void 0;
const common_1 = require("@nestjs/common");
const consumo_energia_service_1 = require("./consumo_energia.service");
let ConsumoEnergiaController = class ConsumoEnergiaController {
    constructor(consumoService) {
        this.consumoService = consumoService;
    }
    getResidencias() {
        return this.consumoService.getResidencias();
    }
    addResidencia(data) {
        return this.consumoService.addResidencia(data);
    }
    getConsumos() {
        return this.consumoService.getConsumos();
    }
    addConsumo(data) {
        return this.consumoService.addConsumo(data);
    }
    getHistorico(residenciaId, dataInicio, dataFim) {
        return this.consumoService.getHistorico(+residenciaId, dataInicio, dataFim);
    }
    getAlerta(residenciaId) {
        return this.consumoService.verificarAlerta(+residenciaId);
    }
};
exports.ConsumoEnergiaController = ConsumoEnergiaController;
__decorate([
    (0, common_1.Get)('residencias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "getResidencias", null);
__decorate([
    (0, common_1.Post)('residencias'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "addResidencia", null);
__decorate([
    (0, common_1.Get)('consumos'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "getConsumos", null);
__decorate([
    (0, common_1.Post)('consumos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "addConsumo", null);
__decorate([
    (0, common_1.Get)('consumos/historico'),
    __param(0, (0, common_1.Query)('residenciaId')),
    __param(1, (0, common_1.Query)('dataInicio')),
    __param(2, (0, common_1.Query)('dataFim')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "getHistorico", null);
__decorate([
    (0, common_1.Get)('consumos/alerta/:residenciaId'),
    __param(0, (0, common_1.Param)('residenciaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ConsumoEnergiaController.prototype, "getAlerta", null);
exports.ConsumoEnergiaController = ConsumoEnergiaController = __decorate([
    (0, common_1.Controller)('energia'),
    __metadata("design:paramtypes", [consumo_energia_service_1.ConsumoEnergiaService])
], ConsumoEnergiaController);
