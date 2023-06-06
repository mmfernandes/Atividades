let senhaValida = 2009;
let valido = false;
let tentativas = 0; 
do{
	tentativas++
    let senha = Number(prompt('Informe uma senha: '))
    if(senha === senhaValida){
        console.log('ACESSO PERMITIDO, VOCE TENTOU ENTRAR ' + tentativas + ' VEZES');
        valido = true;
    }else{
        console.log('ACESSO NEGADO');
    }
}while(!valido)