//O tipo unknown pode ser qualquer coisa, mas ele precisa que você confirme qual tipo é antes de realizar alguma função
let x:unknown ;

x=100;
x="luiz";
x= 900;
x= 10;

const y = 800;

if(typeof x === 'number') console.log(x+y);