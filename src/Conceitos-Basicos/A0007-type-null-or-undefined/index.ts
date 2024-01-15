let x;

if (typeof x === 'undefined') x=20;
console.log(x*2);
//Normalmente não se utiliza undefined

export function criarPessoa(firstName:string, lastName?:string):{
    firstName:string;
    lastName?:string;
} {
    return{
        firstName,
        lastName
    };
}

export function squareOf(x:any){
    if (typeof x === 'number') return x*x;
    return null;
}

const squareOfTwoNumbers = squareOf(2);

if(squareOfTwoNumbers === null){
    console.log("Valor inválido!");
}else{
    console.log(squareOfTwoNumbers*100);
}