// Não encontrei o arquivo json ou xml disponivel como fonte de dados, então utilizei dados genericos. 

const faturamento = [3430, 5938, 8560, 7297, 7493, 9206, 8758, 5760, 1082, 
    2175, 1191, 3992, 1360, 9325, 8836, 8200, 7309, 5395, 2493, 7789, 9248, 
    8533, 7528, 1688, 4781, 3656, 8031, 8679, 1253, 4922, 2893.];

let total = 0, diasComFaturamento = 0;
let menorFaturamento = Math.max(...faturamento);
let maiorFaturamento = Math.min(...faturamento);

faturamento.forEach(valor => {
    if (valor > 0) {
        total += valor;
        diasComFaturamento++;
        if (valor < menorFaturamento) menorFaturamento = valor;
        if (valor > maiorFaturamento) maiorFaturamento = valor;
    }
});

let mediaFaturamento = total / diasComFaturamento;

let diasAcimaDaMedia = faturamento.filter(valor => valor > mediaFaturamento).length;

console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);