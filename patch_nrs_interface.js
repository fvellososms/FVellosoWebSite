const fs = require('fs');
let file = fs.readFileSync('src/lib/nrs.ts', 'utf8');

const newTypes = `
export type TrainingRequirement = {
  nome: string;
  publico?: string;
  cargaInicial?: string;
  cargaPeriodica?: string;
  periodicidade?: string;
  modalidade?: string;
  observacao?: string;
};

export type NRDetails = {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedContent: string[];
  imageUrl: string;
  servicePitch?: string;
  
  // Antigos, agora opcionais
  cargaHoraria?: string;
  periodicidade?: string;

  // Novos campos
  possuiTreinamentoObrigatorio?: boolean;
  treinamentos?: TrainingRequirement[];
  documentosRelacionados?: string[];
  responsabilidades?: string[];
  riscosRelacionados?: string[];
  ultimaAtualizacao?: string;
  fonteOficial?: string;
};
`;

file = file.replace(/export type NRDetails = \{[\s\S]*?\};/, newTypes.trim());
fs.writeFileSync('src/lib/nrs.ts', file);
