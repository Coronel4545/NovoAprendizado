


//Aqui COletmos o nome  através de uma função de coleta e implementação no HTML


function ColetandoNome(){

    let ColetandoNome2= prompt('Insira O seu primeiro nome abaixo');

        //Com a linha de código acima, coletamos a string por meio de um prompt e armazenamos essa string na variável ColetandoNome2

        console.log(ColetandoNome2)
        //Apenas para saber se o valor está sendo armazenado dentro da variável

        document.getElementById('Dinamico').innerHTML=ColetandoNome2;
        //Primeiro localizamos, no HTML, aonde acontecerá o evento. Depois, declaramos que vamos inserir dentro do HTML o valor sdentro da varivel ColetandoNome2
}


ColetandoNome(); //Execução da função
