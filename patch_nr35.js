const fs = require('fs');

let file = fs.readFileSync('src/lib/nrs.ts', 'utf8');

file = file.replace(/O uso de cinturões de segurança.*?inegociável/g, 'O Sistema de Proteção Individual contra Quedas (SPIQ) deve ser selecionado conforme a Análise de Risco, tarefa, fator de queda e sistema de ancoragem');
file = file.replace(/Os trabalhadores designados para essas tarefas precisam estar com a saúde validada \(exames que constatem ausência de labirintite, problemas cardíacos ou neurológicos, marcados expressamente no ASO\)/g, 'A aptidão clínica deve ser avaliada conforme a NR-07, considerando condições de saúde que possam causar mal súbito ou queda e os fatores psicossociais pertinentes, sendo a aptidão consignada no ASO');

fs.writeFileSync('src/lib/nrs.ts', file);
