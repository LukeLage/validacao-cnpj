var importarPrompt = require('prompt-sync');
var chamarPrompt = importarPrompt();
var cnpj = chamarPrompt("Digite o CNPJ: ");
function limparCNPJ(cnpj) {
    return cnpj.replace(/[^\d]+/g, '');
}
function validarCNPJ(cnpj) {
    cnpj = limparCNPJ(cnpj);
    var calcularDigitoVerificador = function (cnpj, peso) {
        var multiplicadores = peso === 1 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        var soma = 0;
        for (var index = 0; index < multiplicadores.length; index++) {
            soma += parseInt(cnpj[index]) * multiplicadores[index];
        }
        var resultado = (soma % 11);
        return resultado < 2 ? 0 : 11 - resultado;
    };
    var primeiroDigito = calcularDigitoVerificador(cnpj, 1);
    var segundoDigito = calcularDigitoVerificador(cnpj + primeiroDigito, 2);
    var validacao = primeiroDigito === parseInt(cnpj[12]) && segundoDigito === parseInt(cnpj[13]);
    validacao ? console.log("CNPJ válido") : console.log("CNPJ inválido");
    return validacao;
}
validarCNPJ(cnpj);
