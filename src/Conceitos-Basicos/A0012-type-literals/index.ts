//Utilizar valores pré-definidos como tipos
const pessoa = {
    nome: 'Luiz' as const, //Aqui o valor não pode ser nada diferente de Luiz, se torna um valor imutavel
    sobrenome: "Miranda"
}
export function escolhaCor(cor: "Vermelho"|"Amarelo"| "Azul"):string{
    return cor;
}
console.log(escolhaCor("Amarelo"))