/*função inserir */

function inserir(){
    /*Pega o elemento digitado */
    var elemento= document.getElementById("valor-tarefas").value;
    if(elemento!==""){
        /*Cria uma TAG em HTML e preenche com o valor do elemento*/
        var li= document.createElement("li");
        li.textContent= elemento;
        /*Inserir na lista */
        var lista= document.getElementById("lista");
        lista.appendChild(li);
    
        /*Limpa o campo após adicionar */
        document.getElementById("valor-tarefas").value="";
    }
}

/*Chamar função ao clicar no botão */
var botao= document.getElementById("btn-add");
botao.addEventListener("click", inserir)