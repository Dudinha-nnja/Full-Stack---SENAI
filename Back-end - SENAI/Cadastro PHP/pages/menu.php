<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu Principal</title>
     <link rel="stylesheet" href="../styles/all.css"> 
</head>
<body>
     <header>
        <div class="logo">Logo</div>
        <nav>
            <ul>
                <li><a href="menu.php">Home</a></li>
                <li><a href="../index.php">Log out</a></li>
            </ul>
        </nav>
     </header>

    <main>
     <?php 
     $titulo = "Matrix";
     var_dump($titulo);
    // $status = true;
    // var_dump($status);

    var_dump($_REQUEST); //get, post, cookies 
    //var_dump($_GET); //IMPORTANTE
    $nome = $_REQUEST['nome']; //vai la no request e busca o nome
    $email = $_REQUEST['email'];
    $senha = $_REQUEST['senha'];

echo "Olá $nome, seja bem vindo! <br>";
echo "$nome, seu email é : $email <br>";
echo "E sua senha é $senha"

     ?>
    </main>

     <footer>
        Todos os direitos reservados a Eduarda 
        <?php echo date("Y"); ?>
     </footer>
</body>
</html>