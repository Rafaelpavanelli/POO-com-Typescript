// Em um diagrama UML o "+" é para publico, "-" é para privado e
// "#" é para protegido
export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00'
    constructor(
      public readonly nome: string,
      public readonly sobrenome: string,
      private readonly idade: number,
      protected readonly cpf: string
    ) {}
  
   static criarPessoa(nome:string, sobrenome:string):Pessoa{
    return new Pessoa(nome,sobrenome,Pessoa.idadePadrao,Pessoa.cpfPadrao)
   }
   metodoNormal():void{
    console.log(Pessoa.idadePadrao,Pessoa.cpfPadrao);
   }
  }
  const pessoa1 = new Pessoa("Joao","Carlos",12,"1221233");
  const pessoa2 = Pessoa.criarPessoa("Maria","Miranda");    
  pessoa1.metodoNormal();