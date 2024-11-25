//var clienteNome = ''
//var clienteCpf = ''
//var clienteEmail = ''
//var clienteTelefone = '' 
//var clienteTipoConta = ' ' 
//var clienteSaldo= ''

class cliente{
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoDeConta;
    saldo;
    depositar(valor){
    //argumento - é o valor passadp 
    //parametro - é a palavra que vai passar o argumento-
    if(this.saldo <= 0){
        console.log('Operação  não permitida')
    } 
    else{
        this.saldo = valor
         console.log('o valor de $(valor) foi efetuado com sucesso')
    }


    pix(valor)
    if(this.saldo <= valor){
        console.log("voce é pobre")}
        else{
            this.saldo+=valor
            console.log(`pix de valor ${valor} foi efetuado com sucesso`)
        }
    }
}

var cliente1 = new cliente
cliente1.nome ='leo'
cliente1.dataNascimento = '11/03/1998'
cliente1.cpf = '01201201223'
cliente1.email = 'teste@'
cliente1.saldo = 0
cliente1.pix(100)

console.log(cliente1)
