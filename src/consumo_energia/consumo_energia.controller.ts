import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';

@Controller('energia')
export class ConsumoEnergiaController {
  constructor(private readonly consumoService: ConsumoEnergiaService) {}

  @Get('residencias')
  getResidencias() {
    return this.consumoService.getResidencias();
  }

  @Post('residencias')
  addResidencia(@Body() data: any) {
    return this.consumoService.addResidencia(data);
  }

  @Get('consumos')
  getConsumos() {
    return this.consumoService.getConsumos();
  }

  @Post('consumos')
  addConsumo(@Body() data: any) {
    return this.consumoService.addConsumo(data);
  }

  @Get('consumos/historico')
  getHistorico(
    @Query('residenciaId') residenciaId: string,
    @Query('dataInicio') dataInicio: string,
    @Query('dataFim') dataFim: string,
  ) {
    return this.consumoService.getHistorico(+residenciaId, dataInicio, dataFim);
  }

  @Get('consumos/alerta/:residenciaId')
  getAlerta(@Param('residenciaId') residenciaId: string) {
    return this.consumoService.verificarAlerta(+residenciaId);
  }
}