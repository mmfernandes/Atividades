function mostrar(){
    let marcados = document.getElementsByName("dia_semana");

    for(let i = 0; i < marcados.length; i++){
        if(marcados[i].checked){
            alert(`Você selecionou: ${marcados[i].value}`);
        }
    }
}
function mostrarRadio(){
    let generos = document.getElementsByName("genero");

    for(let i = 0; i < generos.length; i++){
        if(generos[i].checked){
            alert(`Você selecionou: ${generos[i].value}`);
            break;
        }
    }
}
function verificaSenha(){
    let senha = document.getElementById("senha").value;

    let confirmar_senha = document.getElementById("confirmar_senha").value;

    if(senha != confirmar_senha){
        alert("As senhas não conferem!");
        document.getElementById("senha").value = "";
        document.getElementById("confirmar_senha").value = "";

        document.getElementById("senha").focus();
    }
}


 function mostrarSelect(){
            let estados = document.getElementById("estados");

            alert(estados.options[estados.selectedIndex].index);

            alert(estados.options[estados.selectedIndex].text);

            alert(estados.options[estados.selectedIndex].value);
        }
 function atualiza(){
            let quant = document.getElementById("comentarios").value.length;

            document.getElementById("restante").innerText = `Restam ${150 - quant} caracteres.`;

        }