const lista = ["Pão", "Iogurte", "Abacate", 'Granola', "Suco de uva"];

for (let index = 0; index < lista.length; index++) {
    console.log((index + 1), ":", lista[index]);
}

var i = 0;
while(i < lista.length){
    console.log(lista[i]);
    i++;
}

lista.forEach((e, i) => {
    console.log((i + 1) + ":", e);
});