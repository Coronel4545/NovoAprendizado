//Criando Sistema de coleta de dados(Ordem de procedência, após carragemento da página)



//Criaremos uma função de chamada por um button para execução

function Coletando(){

   let Produto= document.getElementById('Nome_Produto').value;
    //Utilizamos o atributo getElementById para capturar o valor inserindo no ID que está dentro do HTML
    let NomeMacar = document.getElementById('Marca').value;
      let NomeModelo = document.getElementById('Modelo').value;
            let CorPorduto = document.getElementById('CorDoProdutoo').value;
                let ValorDoProduto =  Number (document.getElementById('ValorProduto').value)
                //Podemos definir explicitamente uma conversão de tipo de dado de entrada. Exemplo: String >> Number
              

                 console.log(ValorDoProduto)
                if(typeof ValorDoProduto === ""){
                    alert('O valor não pode ser vazio')
                    return;
                    //O código interrompe a execução da função caso o valor inserido seja identico a uma string
                }if(ValorDoProduto<20){
                    alert('O valor do produto não pode ser menor que $20,00 Doláres')
                    
                    let Decisao = confirm('DESEJA INCREMENTAR MAIS UM ATÉ QUE COMPLETE O VALOR MÍNIMO NECESSÁRIO PARA A VENDA?')

                    if(Decisao === true){
                        while(ValorDoProduto <20){
                            ValorDoProduto++;
                        } //Utilizando  for while para verificar uma variável que está fora do argumento.
                    }else{
                        return;
                    }

                    //Após a verificação de valor inserindo, antes de interromper a função, damos  a oportunidade do valor do cliente ser iterado até preencher o valor mínimo
                }
                       
                  
               
                
                   
                    
                        
                

    console.log(Produto);
    console.log(NomeMacar);
    console.log(NomeModelo);
    console.log(CorPorduto);
    console.log(ValorDoProduto);    
    
    
    let NomeGeral = prompt('Qual Nome Popular Dado ao produto?');

    document.getElementById('Geral').innerHTML= NomeGeral;
    document.getElementById('NOMEDOPRODUTO2').innerHTML= Produto;
    document.getElementById('MARCADOPRODUTO3').innerHTML= NomeMacar;
    document.getElementById('MODELODOPRODUTO4') .innerHTML= NomeModelo;
    document.getElementById('CORDOPRODUTO5').innerHTML=CorPorduto;
    document.getElementById('VALORDOPRODUTO6').innerHTML= `VALOR DO PRODUTO: $ ${ValorDoProduto}`;         
                

     

    

    //Colocando na console para termos certeza de que a função e o código está funcionando corretamente.




}
