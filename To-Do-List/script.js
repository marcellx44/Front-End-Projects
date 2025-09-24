/*Acessar onde o elemento será inserido */
var lista= document.getElementById("lista");

/*Acessar os elementos da lista */

var itens= lista.children;

/*Criar o novo elemento e preencher */

var elemento= document.createElement("li");
elemento.textContent="Tarefa0";

/*Inserir o elemento */

lista.insertBefore(elemento,itens[1]);

/*Adicionar ao clicar */
var botao= document.getElementById("btn-add");
