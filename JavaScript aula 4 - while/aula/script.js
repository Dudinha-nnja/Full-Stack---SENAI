function testes(){
    //enquanto condicao faca 
    //para de tanto ate tanto fica
    contador = 0
   // while(conta < 3){
     //   alert(`que legal!`fiz ${contador+1} vezes`)
      //  contador++
    for(var i = 0; i<3; i++){
alert(`que legal! fiz ${i+1} vezes`)
    }
    }

// testes()
function carregarCatalogo(){
    for(var i=0; i < 5; i++){
        document.getElementById('catalogo').innerHTML+= `
         <div class="livro">
                    <img src="img/expressopolar.webp" alt="">
                    <h4>O EXPRESSO POLAR</h4>
                    <button>
                        adicionar
                        <img src="img/plus.svg" alt="">
                    </button>
                </div>
        `
    }
}
carregarCatalogo()