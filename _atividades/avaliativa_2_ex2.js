let quantMorango = Number (prompt('Quantos kg de morangos você quer comprar?'))
let quantMaca = Number (prompt('Quantas kg de maças você quer comprar?'))
let somaMorango; 
let somaMaca; 
 
 
if(quantMorango > 5){
    somaMorango = quantMorango * 6.20; 
}else{
    somaMorango = quantMorango * 6.50;
}
 
 
if(quantMaca > 5){
    somaMaca = quantMaca * 3.50; 
}else{
    somaMaca = quantMaca * 3.80;
}
 
 
let qntFrutas = quantMorango + quantMaca;
let totalFrutas =  somaMorango + somaMaca;
 
 
console.log(qntFrutas + ' é o kg total') 
console.log(totalFrutas + ' é o valor total da sua compra')
 
 
if(totalFrutas > 50 || qntFrutas > 10){
    desconto = totalFrutas * 0.90
    console.log('Você obteve desconto e o valor total é: ' + desconto)
}else{
    console.log('Você não teve desconto e o valor total é:' + totalFrutas)
}
 
 