var importarPrompt = require('prompt-sync')
var chamarPrompt = importarPrompt();

var cnpj = chamarPrompt("Digite o CNPJ: ");

function limparCNPJ(cnpj: string): string {
    return cnpj.replace(/[^\d]+/g, '');
}

function validarCNPJ (cnpj: string): boolean{
    cnpj = limparCNPJ(cnpj);
    const calcularDigitoVerificador = (cnpj: string, peso: number): number => {
        const multiplicadores = peso === 1 ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2] : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let soma = 0;
        for (let index = 0; index < multiplicadores.length; index++){
            soma += parseInt(cnpj[index]) * multiplicadores[index];
        }
        let resultado = (soma % 11);
        return resultado < 2 ? 0 : 11 - resultado;
    };
    const primeiroDigito = calcularDigitoVerificador(cnpj, 1);
    const segundoDigito = calcularDigitoVerificador(cnpj + primeiroDigito, 2);
    const validacao = primeiroDigito === parseInt(cnpj[12]) && segundoDigito === parseInt(cnpj[13]);

    validacao ? console.log("CNPJ válido") : console.log("CNPJ inválido");

    return validacao;
}

validarCNPJ(cnpj);