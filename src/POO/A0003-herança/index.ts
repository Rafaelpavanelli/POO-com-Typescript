// Em um diagrama UML o "+" é para publico, "-" é para privado e 
// "#" é para protegido
export class Pessoa{
    constructor(
        public readonly nome:string,
        public readonly sobrenome:string,
        private readonly idade:number,
        protected readonly cpf:string

    ){}
    
    public getIdade():number{
            return this.idade;
    }
    public getSobrenome():string{
        return this.sobrenome;
    }
    public getNome():string{
        return this.nome;
    }
    public getCpf():string{
        return this.cpf;
    }
    public getNomeCompleto():string{
        return this.nome +' '+ this.sobrenome
    }
}
export class Aluno extends Pessoa{
    public getNomeCompleto():string{
            return "Isso vem do aluno " + this.nome + " " + this.sobrenome;
    }
}
export class Cliente extends Pessoa{
    public getNomeCompleto():string{
            return "Isso vem do cliente " + this.nome + " " + this.sobrenome;
    }
}
