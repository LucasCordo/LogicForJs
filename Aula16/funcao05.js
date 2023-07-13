//Recursividade
function fatorial (n){
  if(n==1){
    return 1 
  } else {
    return n * fatorial(n-1)
  }
}

console.log(fatorial(5))
/*
  Fatorial:
  5! = 5 x 4 x 3 x 2 x 1 
  5! = 5 x 4!

  Basicamente o fatorial de um número é calculado baseado 
  no fatorial de outro número.

  n! = n x (n-1)!

  Matematicamente o fatorial de 1 sempre será 1.
  1! = 1 
*/