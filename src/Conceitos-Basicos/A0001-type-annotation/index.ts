let nome:string = "Luiz";
let idade:number = 0.0;
let adulto:boolean = false;
let simbolo:symbol = Symbol('qualquer simbolo');
//Float não tem diferença em typescript, então não tem diferença para number
//Arrays
let arrayDeNumeros: Array<number>=[]
let arrayDeNumerosDiferente: number[];
//Objetos
let objetoDePessoas: {nome:string; idade:number; adulto?:boolean}={
    nome:"Joao",
    idade: 22
}//em um objeto, todos que não forem posto em frente a declaração de variavel o "?" é obrigatório

//Função
function soma(x:number,y:number):number{
    return x+y;
}

const result = soma(2,2);