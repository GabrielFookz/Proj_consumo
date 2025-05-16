export interface Residencia {
  id: number;
  nomeResponsavel: string;
  endereco: string;
}

export interface Consumo {
  id: number;
  data: string;
  kwhConsumido: number;
  residenciaId: number;
}