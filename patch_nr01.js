const fs = require('fs');

let file = fs.readFileSync('src/lib/nrs.ts', 'utf8');

let matchRegex = /id: "nr-01"[\s\S]*?cargaHoraria: "1h a 8h",\s*periodicidade: "Admissional \/ Anual",/;
if (matchRegex.test(file)) {
  file = file.replace(matchRegex, (match) => {
    let res = match.replace(/cargaHoraria: "1h a 8h",\s*periodicidade: "Admissional \/ Anual",/, `cargaHoraria: "Conforme capacitação aplicável",\n    periodicidade: "Conforme NR aplicável e situações previstas na NR-01",\n    ultimaAtualizacao: "2026",\n    fonteOficial: "Ministério do Trabalho e Emprego",\n    possuiTreinamentoObrigatorio: true,`);
    res = res.replace(/O grande destaque desta norma é a obrigatoriedade do Gerenciamento de Riscos Ocupacionais \(GRO\) e a implementação do Programa de Gerenciamento de Riscos \(PGR\)\. Todas as empresas, com raras exceções, devem elaborar o PGR para mapear os riscos de suas operações e definir planos de ação claros./, `O GRO deve abranger os perigos e riscos ocupacionais identificados nos processos de trabalho, incluindo, quando aplicáveis, fatores físicos, químicos, biológicos, ergonômicos, de acidentes e fatores de risco psicossociais relacionados ao trabalho. Todas as empresas, com exceções previstas, devem elaborar o PGR para mapear os riscos e definir planos de ação.`);
    return res;
  });
} else {
  console.log("Regex didn't match NR-01");
}

fs.writeFileSync('src/lib/nrs.ts', file);
