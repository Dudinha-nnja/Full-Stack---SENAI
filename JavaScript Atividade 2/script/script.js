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