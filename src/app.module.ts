import { Module } from '@nestjs/common';
import { ConsumoEnergiaController } from './consumo_energia/consumo_energia.controller';
import { ConsumoEnergiaService } from './consumo_energia/consumo_energia.service';

@Module({
  imports: [],
  controllers: [ConsumoEnergiaController],
  providers: [ConsumoEnergiaService],
})
export class AppModule {}