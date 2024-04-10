//Quando for abstract, ela não pode ser instanciada diretamente.
export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number
  ) {}
  abstract bordao(): void; //Dessa forma todos os filhos terão essa função mas com suas proprias caracteristicas
  perderVida(forcaAtaque: number): void {
    this.bordao();
    this.vida -= forcaAtaque;
    console.log(`${this.nome} foi atacado vida=${this.vida}`);
  }

  atacar(personagem: Personagem): void {
    personagem.perderVida(this.ataque);
    console.log(`${this.nome} está atacando ${personagem.nome}`);
  }
}
export class Guerreira extends Personagem {
    bordao(): void {
        console.log("Por emasia");
    }
}
export class Monstro extends Personagem {
    bordao(): void {
        console.log("Gurhhhh")
    }
}
const guerreira = new Guerreira("Guerreira", 100, 1000);
const monstro = new Monstro("monstro", 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
