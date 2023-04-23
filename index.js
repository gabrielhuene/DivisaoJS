let numerador = prompt ("Digite o numerador....:")
let denominador = prompt ("Digite o denominador..:")
if (denominador && numerador == 0)
    {
        alert("Não é possível dividir por 0")
    } else 
{
let numero = Number(numerador)
let divisor = Number(denominador)
let resultado = numero / divisor
alert( `O resultado de ${numero} divido por ${divisor} é: ${resultado}`);
}