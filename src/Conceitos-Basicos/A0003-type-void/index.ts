//Sempre tente ser explicito com o tipo que você está usando
//Void é quando a função não tem retorno
function semRetorno(...args:string[]):void{
    console.log(args.join(' '));
};
const pessoa = {
    nome: "Luiz",
    sobrenome: "Otavio",

    exibirNome():void{
        console.log(this.nome + " " + this.sobrenome);
    }
}
semRetorno("Luiz","Calors");
pessoa.exibirNome();
export { pessoa}