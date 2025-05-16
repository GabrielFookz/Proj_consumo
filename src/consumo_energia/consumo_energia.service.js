"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoEnergiaService = void 0;
const common_1 = require("@nestjs/common");
let ConsumoEnergiaService = class ConsumoEnergiaService {
    constructor() {
        this.residencias = [];
        this.consumos = [];
    }
    getResidencias() {
        return this.residencias;
    }
    addResidencia(data) {
        const nova = { id: Date.now(), ...data };
        this.residencias.push(nova);
        return nova;
    }
    getConsumos() {
        return this.consumos.map((c) => {
            const residencia = this.residencias.find((r) => r.id === c.residenciaId);
            return { ...c, residencia: residencia?.nomeResponsavel || 'Desconhecido' };
        });
    }
    addConsumo(data) {
        const novo = { id: Date.now(), ...data };
        this.consumos.push(novo);
        return novo;
    }
    getHistorico(residenciaId, dataInicio, dataFim) {
        return this.consumos.filter((c) => {
            return (c.residenciaId === residenciaId &&
                c.data >= dataInicio &&
                c.data <= dataFim);
        });
    }
    verificarAlerta(residenciaId) {
        const registros = this.consumos
            .filter((c) => c.residenciaId === residenciaId)
            .sort((a, b) => a.data.localeCompare(b.data));
        if (registros.length < 2) {
            return { alerta: false, mensagem: 'Consumo insuficiente ' };
        }
        const penultimo = registros[registros.length - 2];
        const ultimo = registros[registros.length - 1];
        if (ultimo.kwhConsumido > penultimo.kwhConsumido) {
            return {
                alerta: true,
                mensagem: `Atenção! O consumo de ${ultimo.kwhConsumido} kWh foi maior que o mês anterior (${penultimo.kwhConsumido} kWh).`,
            };
        }
        else {
            return {
                alerta: false,
                mensagem: 'Consumo dentro da média ou menor que o mês anterior.',
            };
        }
    }
};
exports.ConsumoEnergiaService = ConsumoEnergiaService;
exports.ConsumoEnergiaService = ConsumoEnergiaService = __decorate([
    (0, common_1.Injectable)()
], ConsumoEnergiaService);
