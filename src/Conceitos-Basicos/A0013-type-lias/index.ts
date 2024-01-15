//Você usa para criar apelidos para o tipo
type Idade = number;
type Pessoa = {
    nome:string;
    idade:Idade;
    salario: number;
    corPreferida?:string;
}
type CorRgb = "Vermelho"|"Verde"|"Azul";
type CorCMYK = "Ciano"|"Magenta"|"Amarelo"|"Preto";

type CorPreferida = CorRgb | CorCMYK;

const pessoa : Pessoa ={
    idade: 30,
    nome: "Luiz",
    salario: 2.000,
}

export function setCorFavorita(pessoa: Pessoa,cor:CorPreferida): Pessoa{
    return {...pessoa,corPreferida:cor}
}
console.log(setCorFavorita(pessoa,"Azul"))