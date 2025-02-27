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
    var livros = [
        [`img/expressopolar.webp`, `O Expresso Polar`],
        ['img/grite.jpg', 'O Grinch'],
        [`img/esqueceramdeeu.webp`, `esqueceram de eu`],

        [`img/oestranhomundodejack.webp`, `O estranho mundo de jack`],

        [`img/natalmickey.webp`, `O natal do Mickey Mouse`],

        [`img/guardiao.webp`, `Os guardiões`],

        [`img/bela.jfif`, `A Bela e a Fera`],



    ]
    livros.forEach(cadaLivro=> {
        document.getElementById('catalogo').innerHTML+= `
         <div class="livro">
                    <img src="${cadaLivro[0]}" alt="">
                    <h4>${cadaLivro[1]}</h4>
                    <button>
                        adicionar
                        <img src="img/plus.svg" alt="">
                    </button>
                </div>
        `
    })
}
carregarCatalogo()

window.onload = function() {
    var audio = document.getElementById('musica');
    audio.play();
};