class usuario{
    // id, @, nome, email, bio, genero

constructor(id, apelido, nome, email, bio, genero){
    this.id = id
    this.apelido = apelido
    this.nome = nome
    this.email = email
    this.bio = bio
    this.genero = genero
    this.postar = function(){
        document.querySelector('#resposta').innerHTML +=
        `
        <div class="post">
        <h3>${this.apelido}</h3>
        <p>${pensamento}</p>      
        </div>
        
        `
      }
   } 
}
 
var user1 = new usuario(1, 'Dudinhalegal', 'victor', 'victor.rohod@DocumentTimeline.senai.br', 'instrutor de ti', 'masculino')

function postarFeed(){
    alert("POSTADO COM SUCESSO")
    pensamento = document.querySelector('#pensamento').value

    user1.postar(pensamento)
}