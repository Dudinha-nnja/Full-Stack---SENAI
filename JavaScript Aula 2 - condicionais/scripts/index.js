function explicacao1(){
//SE CONDICAO / SENAO
escolha = confirm('DESEJA RODAR TRUE OR FALSE?')
alert(escolha)

if (escolha) {
 //   console.log('fiz o se')
    alert('voce escolheu true')

}else{
   // console.log('senao')
    alert('voce escolheu false')
    }
}

function explicacao2(){
alert("seja bem vindo a lojinha") 
escolha = prompt('(A) bolo no pote R$ 10,  (B) açai R$20, C) Torta R$ 15 ')
switch(escolha){
    case 'A':
        alert('voce escolheu bolo no pote')
        break
    case 'B':
        alert('voce escolheu bolo no acai')
        break
    case 'C':
        alert('voce escolheu bolo ')
        break
    }
}

function explicacao3(){
    
//idade  = parseInt()

idade = Number(prompt('digite a sua idade'))

if(idade >= 18){
alert('seja bemn vindo(a) ao website!')
//DOCUMENT - DOCUMENT HTML
//QUERYSELECTOR - "BUSCADOR"
//INNERHTML = "DENTRO DO ELEMENTO"
document.querySelector('body').innerHTML = ""
}else{
    alert('idade invalida')
//WINDOW - JANELA
// LOCATION - "URL"
    window.location = 'https://www.google.com'
}
}
