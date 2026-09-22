const fs = require('fs');

let file = fs.readFileSync('src/lib/nrs.ts', 'utf8');

file = file.replace(/O grande destaque desta norma é a obrigatoriedade do Gerenciamento de Riscos Ocupacionais \(GRO\) e a implementação do Programa de Gerenciamento de Riscos \(PGR\)\. Todas as empresas, com raras exceções, devem elaborar o PGR para mapear os riscos de suas operações e definir planos de ação claros./, `O GRO deve abranger os perigos e riscos ocupacionais identificados nos processos de trabalho, incluindo, quando aplicáveis, fatores físicos, químicos, biológicos, ergonômicos, de acidentes e fatores de risco psicossociais relacionados ao trabalho. Todas as empresas, com exceções previstas, devem elaborar o PGR para mapear os riscos e definir planos de ação.`);

fs.writeFileSync('src/lib/nrs.ts', file);
