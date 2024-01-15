//Enum serve para numeras as coisas
enum Cores{
    VERMELHO,//0
    AZUL,//1
    AMARELO,//2
    VERDE = 10, //Agora o verde é o indice 10
  
}

enum Cores{
    ROXO = "ROXO",
    ROSA = "ROSA" 
} //Os dois enums cores são merge um com o outro
console.log(Cores); //Ira chegar uma lista como VERMELHO: 0
console.log(Cores.VERMELHO) //Ira retornar 0 pois é como está definido o valor do vermelho
console.log(Cores[0]) //ira retornar VERMELHO
console.log(Cores["ROXO"]) // Ira me retornar ROXO

export function escolhaCor(cor:Cores):void{
    console.log(Cores[cor])
}
escolhaCor(1);