import { Injectable } from '@nestjs/common';
import { Residencia, Consumo } from './consumo_energia.model';

@Injectable()
export class ConsumoEnergiaService {
  private residencias: Residencia[] = [];
  private consumos: Consumo[] = [];

  getResidencias() {
    return this.residencias;
  }

  addResidencia(data: Omit<Residencia, 'id'>): Residencia {
    const nova: Residencia = { id: Date.now(), ...data };
    this.residencias.push(nova);
    return nova;
  }

  getConsumos() {
    return this.consumos.map((c) => {
      const residencia = this.residencias.find((r) => r.id === c.residenciaId);
      return { ...c, residencia: residencia?.nomeResponsavel || 'Desconhecido' };
    });
  }

  addConsumo(data: Omit<Consumo, 'id'>): Consumo {
    const novo: Consumo = { id: Date.now(), ...data };
    this.consumos.push(novo);
    return novo;
  }

  getHistorico(residenciaId: number, dataInicio: string, dataFim: string): Consumo[] {
    return this.consumos.filter((c) => {
      return (
        c.residenciaId === residenciaId &&
        c.data >= dataInicio &&
        c.data <= dataFim
      );
    });
  }

  verificarAlerta(residenciaId: number): any {
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
    } else {
      return {
        alerta: false,
        mensagem: 'Consumo dentro da média ou menor que o mês anterior.',
      };
    }
  }
}