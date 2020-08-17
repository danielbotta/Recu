  function salvar(){
    let a = document.getElementById('exampleInputNome').value
let b = document.getElementById('exampleInputEmail').value
let c = document.getElementById('exampleInputNumero').value
console.log(a,b,c)
    let resultado =''
if(a=='' || b=='' || c ==""){
if(a==''){
    resultado += "Digite seu Nome<br>"
          document.getElementById("exampleInputNome").style.borderColor = "red"
}

if(b==''){
    resultado += "Digite seu Email<br>"
          document.getElementById("exampleInputEmail").style.borderColor = "red"   
}

if(c==''){
    resultado += "Digite seu Telefone<br>"
          document.getElementById("exampleInputNumero").style.borderColor = "red"   
}}
else{
          document.getElementById("exampleInputNome").style.borderColor = "green"   
          document.getElementById("exampleInputEmail").style.borderColor = "green"   
          document.getElementById("exampleInputNumero").style.borderColor = "green"      
          resultado += "Sucesso"

}
        document.getElementById('bb').innerHTML = resultado
}