const fs = require('fs');

let file = fs.readFileSync('src/lib/nrs.ts', 'utf8');

function replaceNR(nrNumber, replacer) {
  const regex = new RegExp(`({\\s*id:\\s*"nr-${nrNumber}"[\\s\\S]*?)(?=\\s*},?\\s*{?\\s*id:\\s*"nr-)`, 'g');
  file = file.replace(regex, (match) => {
    return replacer(match);
  });
}

// NR-01
replaceNR('01', (match) => {
  let res = match.replace(/cargaHoraria: "1h a 8h",\s*periodicidade: "Admissional \/ Anual",/, `cargaHoraria: "Conforme capacitação aplicável",\n    periodicidade: "Conforme NR aplicável e situações previstas na NR-01",\n    ultimaAtualizacao: "2026",\n    fonteOficial: "Ministério do Trabalho e Emprego",\n    possuiTreinamentoObrigatorio: true,`);
  res = res.replace(/A NR 01.*?mínimos para a.*?disposições gerais,.*?e o Gerenciamento de Riscos Ocupacionais \(GRO\)./, `A NR 01 estabelece as diretrizes e os requisitos para o Gerenciamento de Riscos Ocupacionais (GRO) e as medidas de prevenção em Segurança e Saúde no Trabalho (SST).`);
  res = res.replace(/"O GRO deve abranger os perigos e riscos ocupacionais identificados nos processos de trabalho."/, `"O GRO deve abranger os perigos e riscos ocupacionais identificados nos processos de trabalho, incluindo, quando aplicáveis, fatores físicos, químicos, biológicos, ergonômicos, de acidentes e fatores de risco psicossociais relacionados ao trabalho."`);
  return res;
});

// NR-04
replaceNR('04', (match) => {
  let res = match.replace(/A NR 04 estabelece a obrigatoriedade de as empresas manterem Serviços Especializados em Engenharia de Segurança e em Medicina do Trabalho \(SESMT\)./, `A NR-04 estabelece os critérios para constituição e dimensionamento dos Serviços Especializados em Segurança e em Medicina do Trabalho (SESMT), considerando fatores como o grau de risco da atividade econômica e o número de trabalhadores da organização.`);
  res = res.replace(/cargaHoraria: "Não aplicável",\s*periodicidade: "Conforme fiscalização",/, `ultimaAtualizacao: "2022",\n    fonteOficial: "Ministério do Trabalho e Emprego",\n    possuiTreinamentoObrigatorio: false,`);
  return res;
});

// NR-05
replaceNR('05', (match) => {
  let res = match.replace(/cargaHoraria: "12h a 20h",\s*periodicidade: "Anual \(Mandato de 1 ano\)",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Treinamento para Membros da CIPA",\n        cargaInicial: "8h, 12h, 16h ou 20h (conforme o grau de risco da organização)",\n        cargaPeriodica: "Conforme grau de risco",\n        periodicidade: "Anual",\n        modalidade: "Pode ser EaD, semipresencial ou presencial, conforme regras específicas",\n      }\n    ],`);
  return res;
});

// NR-06
replaceNR('06', (match) => {
  let res = match.replace(/cargaHoraria: "2h a 4h",\s*periodicidade: "Admissional \/ Periódico",/, `cargaHoraria: "Definida conforme os EPIs e riscos da atividade",\n    periodicidade: "Na admissão, alteração de EPI/riscos e quando necessário",\n    possuiTreinamentoObrigatorio: true,`);
  return res;
});

// NR-11
replaceNR('11', (match) => {
  let res = match.replace(/cargaHoraria: "8h a 16h",\s*periodicidade: "Anual \(1 ano\)",/, `cargaHoraria: "Conforme equipamento e atividade",\n    periodicidade: "Conforme capacitação, função, equipamento e requisitos aplicáveis",\n    possuiTreinamentoObrigatorio: true,`);
  return res;
});

// NR-17
replaceNR('17', (match) => {
  let res = match.replace(/Um dos instrumentos mais cruciais da norma é a Análise Ergonômica do Trabalho \(AET\)./, `A gestão ergonômica inicia-se pela Avaliação Ergonômica Preliminar (AEP), destinada a identificar situações que demandem adaptação às características psicofisiológicas dos trabalhadores. Quando forem identificadas situações que exijam aprofundamento, insuficiência das medidas existentes, indicações provenientes do PCMSO ou relação com acidentes e doenças, pode ser necessária a Análise Ergonômica do Trabalho (AET).`);
  res = res.replace(/cargaHoraria: "Variável",\s*periodicidade: "Anual \/ Conforme AET",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Treinamento sobre Riscos Ergonômicos",\n        cargaInicial: "Variável",\n        cargaPeriodica: "Variável",\n        periodicidade: "Admissional e periódico",\n        observacao: "Os trabalhadores devem ser treinados quanto aos riscos ergonômicos da sua atividade e medidas de prevenção."\n      }\n    ],`);
  return res;
});

// NR-18
replaceNR('18', (match) => {
  let res = match.replace(/cargaHoraria: "4h a 16h",\s*periodicidade: "Admissional \/ Periódico \(2 anos\)",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Básico de Segurança",\n        cargaInicial: "4h",\n        cargaPeriodica: "4h",\n        periodicidade: "2 anos",\n      },\n      {\n        nome: "Operador de Grua",\n        cargaInicial: "80h (sendo pelo menos 40h práticas)",\n        cargaPeriodica: "Conforme NR-18",\n        periodicidade: "Bienal",\n      },\n      {\n        nome: "Operador de Guindaste",\n        cargaInicial: "120h (sendo pelo menos 80h práticas)",\n      },\n      {\n        nome: "Sinaleiro / Amarrador de Cargas",\n        cargaInicial: "16h",\n      },\n      {\n        nome: "Operador de Elevador",\n        cargaInicial: "16h",\n        cargaPeriodica: "4h",\n        periodicidade: "Anual",\n      },\n      {\n        nome: "Operador de PEMT",\n        cargaInicial: "4h",\n        cargaPeriodica: "4h",\n        periodicidade: "2 anos",\n      }\n    ],`);
  return res;
});

// NR-22
replaceNR('22', (match) => {
  let res = match.replace(/PGR específico para Mineração \(PGRM\)/g, `Programa de Gerenciamento de Riscos (PGR) da atividade de mineração`);
  res = res.replace(/cargaHoraria: "24h \(Integração\)",\s*periodicidade: "Anual \(1 ano\)",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Integração para Mineração",\n        cargaInicial: "24h",\n        periodicidade: "Anual"\n      }\n    ],`);
  return res;
});

// NR-23
replaceNR('23', (match) => {
  let res = match.replace(/cargaHoraria: "4h a 8h",\s*periodicidade: "Anual \(1 ano\)",/, `cargaHoraria: "Conforme legislação estadual e normas técnicas aplicáveis",\n    periodicidade: "Conforme legislação estadual e normas técnicas aplicáveis",\n    possuiTreinamentoObrigatorio: true,`);
  return res;
});

// NR-26
replaceNR('26', (match) => {
  let res = match.replace(/FISPQ \(Ficha de Informação de Segurança de Produtos Químicos\)/g, `Ficha com Dados de Segurança (FDS, anteriormente conhecida como FISPQ)`);
  res = res.replace(/cargaHoraria: "Não aplicável",\s*periodicidade: "Conforme FISPQ \/ Rotulagem",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Treinamento sobre Riscos Químicos e FDS",\n        observacao: "Trabalhadores devem ter acesso às fichas e receber treinamento sobre os perigos e medidas de segurança."\n      }\n    ],`);
  return res;
});

// NR-33
replaceNR('33', (match) => {
  let res = match.replace(/cargaHoraria: "16h \(Trabalhador\) \/ 40h \(Supervisor\)",\s*periodicidade: "Anual \(1 ano\)",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        funcao: "Trabalhador Autorizado",\n        nome: "Trabalhador Autorizado em Espaço Confinado",\n        cargaInicial: "16h",\n        cargaPeriodica: "8h",\n        periodicidade: "Anual"\n      },\n      {\n        funcao: "Vigia",\n        nome: "Vigia de Espaço Confinado",\n        cargaInicial: "16h",\n        cargaPeriodica: "8h",\n        periodicidade: "Anual"\n      },\n      {\n        funcao: "Supervisor de Entrada",\n        nome: "Supervisor de Entrada em Espaço Confinado",\n        cargaInicial: "40h",\n        cargaPeriodica: "8h",\n        periodicidade: "Anual"\n      },\n      {\n        funcao: "Equipe de Emergência e Salvamento",\n        nome: "Equipe de Emergência e Salvamento",\n        cargaInicial: "24h ou 32h, conforme nível do resgatista",\n        periodicidade: "Conforme plano de emergência e NR-33"\n      }\n    ],`);
  return res;
});

// NR-35
replaceNR('35', (match) => {
  let res = match.replace(/Qualquer tarefa neste escopo necessita de Análise de Risco prévia e Permissão de Trabalho \(PT\)\./g, `Todo trabalho em altura deve ser precedido de Análise de Risco. Os trabalhos não rotineiros devem ser previamente autorizados por Permissão de Trabalho, conforme os requisitos da NR-35.`);
  res = res.replace(/A utilização de cinturão de segurança tipo paraquedista com.*inegociável./g, `O Sistema de Proteção Individual contra Quedas (SPIQ) deve ser selecionado conforme a Análise de Risco, tarefa, fator de queda e sistema de ancoragem.`);
  res = res.replace(/Atestado de Saúde Ocupacional \(ASO\) rigoroso, contemplando exames que constatem ausência de labirintite, problemas cardíacos ou neurológicos/g, `A aptidão clínica deve ser avaliada conforme a NR-07, considerando condições de saúde que possam causar mal súbito ou queda e os fatores psicossociais pertinentes, sendo a aptidão consignada no ASO`);
  res = res.replace(/capacidade de carga atestada por engenheiro mecânico/g, `capacidade de carga atestada por profissional legalmente habilitado`);
  res = res.replace(/cargaHoraria: "8h \(Básico\) \/ 16h \(Instrutor\)",\s*periodicidade: "Bienal \(2 anos\)",/, `possuiTreinamentoObrigatorio: true,\n    treinamentos: [\n      {\n        nome: "Trabalho em Altura",\n        publico: "Trabalhador autorizado",\n        cargaInicial: "8h",\n        cargaPeriodica: "8h",\n        periodicidade: "2 anos",\n        modalidade: "Presencial (conforme Portaria MTE nº 1.259/2026)",\n        observacao: "Treinamento eventual também deve ser realizado nas situações previstas na NR-01 e NR-35."\n      }\n    ],`);
  return res;
});


fs.writeFileSync('src/lib/nrs.ts', file);
