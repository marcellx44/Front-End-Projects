/*função inserir */

function inserir(){
    /*Pega o elemento digitado */
    var elemento= document.getElementById("valor-tarefas").value;
    if(elemento!==""){
        /*Cria uma TAG em HTML e preenche com o valor do elemento*/
        var tarefa= document.createElement("div");
        tarefa.className= "tarefas-a-fazer";
        /*Cria as divs filhas */
        var checkbox= document.createElement("div");
        checkbox.className="check-box";

        var conteudo= document.createElement("div");
        conteudo.className="conteudo-tarefa";

        var botao_delet= document.createElement("div");
        botao_delet.className="botao-deletar";
        
        /*Preenche com o conteudo */
        conteudo.textContent= elemento;
        /*Inserir no #container-lista*/
        var container= document.getElementById("container-lista");
        tarefa.appendChild(checkbox);
        tarefa.appendChild(conteudo);
        tarefa.appendChild(botao_delet);
        container.appendChild(tarefa);
    
        /*Limpa o campo após adicionar */
        document.getElementById("valor-tarefas").value="";
    }
}

/*Chamar função ao clicar no botão */
var botao= document.getElementById("btn-add");
botao.addEventListener("click", inserir)