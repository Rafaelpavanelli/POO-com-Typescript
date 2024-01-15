type TemNome = {nome:string};
type TemSobrenome = {sobrenome:string};
type TemIdade = {idade:number};

type Pessoa = TemNome & TemSobrenome & TemIdade; //o & torna os parametros obrigatórios, coisa que o | não torna

const pessoa:Pessoa = {
    idade:30,
    nome: "Luiz",
    sobrenome: "Carlos"
}
console.log(pessoa);