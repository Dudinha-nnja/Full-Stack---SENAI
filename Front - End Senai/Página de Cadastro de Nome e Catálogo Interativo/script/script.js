//DOM
//URL - LOCATION
//BOTAO DE VOLTA - HISTORY
//SITE / CONTEUDO - DOCUMENT

// window.location.reload() - reinicia a pagina sozinho toda hora
//window.location = "https://www.google.com" - leva em uma pagina   

//document - documento
//getElementById - busca o sujeito pelo id
//iner - coloca um elemento
//se innertext - apenas texto
//se innerhtml - texto e codigo

document.getElementById('catalogo').innerHTML = 'oi' 
document.querySelector('ola')
function registrarNome(){
 nome =  document.querySelector('#inputNome').value
document.querySelector('#catalogo').innerHTML = `
    <div id="nomeDiv">
 eu  ${nome} sou muito linda
     </div>
    `
}