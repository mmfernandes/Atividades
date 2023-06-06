let resultado = 0;
for(let i = 1; i <= 100; i++){
  resultado += i / (101 - i);
}
console.log('Resultado: ' + resultado.toFixed(2));