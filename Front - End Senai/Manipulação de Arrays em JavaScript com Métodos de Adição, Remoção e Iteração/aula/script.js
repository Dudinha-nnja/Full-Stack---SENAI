//var fruta1 ='melancia'
//var fruta2 ='tomate'
//var fruta3 ='melão' 
//var fruta4 ='maracujá'
//var fruta5 ='mexerica'

fruta = []
teste = array('melancia','tomate', 'melao','maracuja')
teste = array()
teste[0] = 'olha'
teste[1] = 'que'
teste[2] = 'top'

console.log(fruta)
console.log(fruta[1])

//push 'empurrar' - adicionar na lista
fruta.push('uva')

console.log(fruta)

//unshift = adicionar no começo da lista
fruta.unshift('abacate')
console.log(fruta)

//pop- remover o ultimo 

fruta.pop()
console.log(fruta)

//shift - remover o primeiro
fruta.shift()
console.log(fruta)

//splice - remove, adiciona e atualiza

fruta.splice(2,3)
fruta.splice(2,0, 'morango')
fruta.splice(1,1, 'maracujá')
console.log(fruta)

alert(fruta.lenght)

for(var i =0;1 < 3;i++){
    document.getElementById('resposta').innerHTML+=`
    ${fruta[i]}
    `
}

fruta.array.forEach(cadafruta =>{
    document.getElementById('resposta').innerHTML+=`
    ${cadaFruta} <br>
    `
});