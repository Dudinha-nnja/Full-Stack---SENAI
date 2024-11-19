var n1 
var n2
function calculadora(){
    alert("Escolha a função") 
    escolha = prompt('A) Adição,  B) Subtração, C) Divisão D) Multiplicação ')
    switch(escolha){
        case 'A':
            alert('voce escolheu adição')
            var n1 = prompt("digite um numero")
            var n2 = prompt("digite outro numero")
            soma = Number (n1)+Number(n2)
            alert("O total da soma é:" +soma)
            break
        case 'B':
            alert("voce escolheu subtração")
            var n1 = prompt("digite um  numero")
            var n2 = prompt("digite outro numero")
            subtracao = Number (n1) - Number(n2)
            alert('O total da subtração é:' +subtracao)
            break
        case 'C':
            alert('Voce escolheu divisão ')
            var n1 = prompt("digite um  numero")
            var n2 = prompt("digite outro numero")
            div = Number(n1) / Number(n2)
            alert("O total da divisão é" +div)
            break
            case 'D':
            alert("VOce escolheu multriplicação")
            var n1 = prompt("digite um  numero")
            var n2 = prompt("digite outro numero")
            multiplicacao = Number(n1) * Number(n2)
            alert("O total da multiplicação é:" +multiplicacao)
        }
    }
     
    function nota(){
        
        nota = Number(prompt('digite a sua nota'))
        
        if(nota >= 7){
        alert('Você foi aprovado! :)')

        }else{
            alert('Você não foi aprovado! :(')
  
        }
        }
        
        function semana(){
            alert("Escolha um dia da semana") 
escolha = prompt('1) Segunda-feira  2) Terça-feira 3) Quarta-feira 4) Quinta-feira 5) Sexta-feira 6) Sabado 7) Domingo ')
switch(escolha){
    case '1':
        alert('voce escolheu Segunda-feira')
        break
    case '2':
        alert('voce escolheu Terça-feira')
        break
    case '3':
        alert('voce escolheu Quarta-feira ')
        break
    case '4':
        alert('voce escolheu Quinta-feira')
        break
    case '5':
        alert('voce escolheu Sexta-feira')
        break
     case '6':
        alert('voce escolheu Sabado')           
     case '7':
        alert('voce escolheu Domingo')
        break
    }
}