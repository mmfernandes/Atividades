
let tabuadaDo_ = Number (prompt('Qual tabuada você quer ver?'))
let inicioTab = Number (prompt('Deve começar com? '))
let fimTab = Number(prompt('E deve acabar em? ')) 
 
 
for(inicioTab ; inicioTab <= fimTab; ++inicioTab){
    
    tabuada = (tabuadaDo_ * inicioTab)
    console.log(tabuadaDo_ + ' X ' + inicioTab + ' = ' + tabuada );
}
 