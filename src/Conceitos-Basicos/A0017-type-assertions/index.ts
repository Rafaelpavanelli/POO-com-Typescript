//Se tiver duvidas que ira estar na tela
const body1 = document.querySelector('body');
if(body1) body1.style.background = 'red';

// no-null-assertion
const body2 = document.querySelector('body')!;
 body2.style.background = 'red';

 //type-assertion -- se tiver certeza que está na tela
 const body3 = document.querySelector('body') as HTMLBodyElement;
 body3.style.background = 'red';
