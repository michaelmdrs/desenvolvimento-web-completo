

function filme(personagens, filmes, lancamentos, id)

{

 if ((id > 0) && (id <= filmes.length)) {

   var opcao = id - 1;

   return personagens[opcao] + " é um personagem do filme " + filmes[opcao] + " que estreou no cinema em " + lancamentos[opcao] + ".";

 }else{

   return "Essa não é uma opção válida.";

 }

}

E
