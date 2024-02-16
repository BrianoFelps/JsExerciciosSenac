var usuario, senha; //Declaração resumida, com valores abaixo.

usuario = 'André';
senha = 'Brin';

//Condicional if, verifica o usuario E (&&) a senha para validar
if (usuario === 'André' && senha === 'Brin') {
    console.log(`Muito bem, ${usuario}! Você foi logado com sucesso.`)
} else {
    console.log(`Informações incorretas!`)
}

// Exemplos 2 (Forma de verificação com for, if e else.)

const nomes = ["Ana", 'Flávio', 'Lucas', 'Bruno', 'Homero'];

const nomeProcurado = 'Homero';

var encontrado = false;

for (let i = 0; i < nomes.length; i++) {
    if(nomeProcurado === nomes[i]){
        encontrado = true;
        break; //O break é usado em quesito de performance, em caso da lista
        //ser muito grande, ela iria parar ao encontro do nome, economizando memória.
    }
}

if(encontrado){
        console.log(`${nomeProcurado} está na lista!`)
    }else {
        console.log(`${nomeProcurado} NÃO está na lista!`)
}

// Exemplos 3 (Forma de verificação com if, else e .includes()).

if(nomes.includes(nomeProcurado)){
    console.log(`${nomeProcurado} está na lista!`)

}else {
    console.log(`${nomeProcurado} NÃO está na lista!`)
}