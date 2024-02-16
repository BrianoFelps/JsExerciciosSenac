const lista = ["Pão", "Iogurte", "Abacate", 'Granola', "Suco de uva"];

//Método for function com laço de repetição, indo de encontro a cada item.
for (let index = 0; index < lista.length; index++) {
    console.log((index + 1), ":", lista[index]);
}

//Método while, com o mesmo objetivo do de cima.
var i = 0;
while(i < lista.length){
    console.log(lista[i]);
    i++;
}

//Método arrow function com .forEach (para cada Elemento e índice, console log).
lista.forEach((e, i) => {
    console.log((i + 1) + ":", e); //i+1 usado para exibir a lista ordenadamente, a partir do 1.
});