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

        /*icone de check */
        var circle= document.createElement("i");
        circle.className= "fa-regular fa-circle";

        var conteudo= document.createElement("div");
        conteudo.className="conteudo-tarefa";

        var botao_delet= document.createElement("div");
        botao_delet.className="deletar";

        /*icone de deletar*/
        var trash= document.createElement("i");
        trash.className= "fa-solid fa-trash";

        /*Função de deletar */
        var botao_deletar= trash;
        var container= document.getElementById("container-lista");
        botao_deletar.addEventListener("click", (event)=>{
            container.removeChild(event.target.parentNode.parentNode);
        });
        
        /*Preenche com o conteudo */
        conteudo.textContent= elemento;
        /*Inserir no #container-lista*/
        var container= document.getElementById("container-lista");
        tarefa.appendChild(checkbox);
        checkbox.appendChild(circle);
        tarefa.appendChild(conteudo);
        tarefa.appendChild(botao_delet);
        botao_delet.appendChild(trash);
        container.appendChild(tarefa);
    
        /*Limpa o campo após adicionar */
        document.getElementById("valor-tarefas").value="";
    }
}

/*Chamar função ao clicar no botão */
var botao= document.getElementById("btn-add");
botao.addEventListener("click", inserir);