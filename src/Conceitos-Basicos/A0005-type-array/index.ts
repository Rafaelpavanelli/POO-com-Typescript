//Array<T> || T[]

export function multiplicaArgumentos(...args:Array<number>):number{
    return args.reduce((ac,valor)=> ac * valor,1);
}

export function concatenaString(...args:string[]):string{
    return args.reduce((ac,valor)=> ac + valor);

}
export function toUppercase(...args:string[]):string[]{
    return args.map(valor=>valor.toUpperCase());

}
const resultado = multiplicaArgumentos(1,2,4,5);
const resultadoConcatenacao = concatenaString("ola","mundo");
const resultadoToUppercase = toUppercase("Ola","Mundo");
console.log(resultado);
console.log(resultadoConcatenacao);
console.log(resultadoToUppercase);