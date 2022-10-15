/* 
    Objetivo - quando clicar nas abas temos que mostrar o conteudo
    da aba selecionada pelo usuario e ocultar a aba que estava 
    anteriormente selecionada.

    Passo 1 - Lembrar sempre de fazer um passo a passo de como
    construir um Java Script e com o Objetivo do mesmo.
    
    
*/

        //Passo 2 - Pegar os elementos que representam as Abas.
const abas = document.querySelectorAll(".aba");
        //Passo 3 - Identificar clique no elemento abas
abas.forEach(aba => {
    aba.addEventListener("click", function() {
      
      if(aba.classList.contains("selecionado")){
        return;
      }

        // Passo 4 - Quando usuario clicar desmarcar aba selecionada.
       
       const abaSelecionada = document.querySelector('.selecionado');
       abaSelecionada.classList.remove('selecionado');

        // passo 5 - marcar a aba clicada como selecionado
        aba.classList.add("selecionado")

        // passo 6 - Esconder o conteudo anterior
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        // passo 7 -  Mostrar o conteudo da aba selecionada
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
    });
});

