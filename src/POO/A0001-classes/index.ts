export class Colaborador {
  constructor(
    public readonly name: string,
    public readonly sobrenome: string
  ) {}
}
export class Empresa {
  private readonly nome: string; //public será o valor padrão, mesmo se não colocado ele será pré definido assim
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaborador(): void {
    this.colaboradores.map((colaborador: Colaborador) => {
      colaborador.name && console.log(colaborador.name);
    });
  }
}

const empresa1 = new Empresa("Teste", "313129312931/9");
const colaborador1 = new Colaborador("José", "Carlos");
const colaborador2 = new Colaborador("João", "Carlos");
const colaborador3 = new Colaborador("Miranda", "Carlos");

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
