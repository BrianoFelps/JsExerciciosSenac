var usuario, senha;

usuario = 'André';
senha = 'Brin';

if (usuario === 'André' && senha === 'Brin') {
    console.log(`Muito bem, ${usuario}! Você foi logado com sucesso.`)
} else {
    console.log(`Informações incorretas!`)
}

// Exemplos 2

const nomes = ["Ana", 'Flávio', 'Lucas', 'Bruno', 'Homero'];

const nomeProcurado = 'Homero';

var encontrado = false;

for (let i = 0; i < nomes.length; i++) {
    if(nomeProcurado === nomes[i]){
        encontrado = true;
    }
}

if(encontrado){
        console.log(`${nomeProcurado} está na lista!`)
    }else {
        console.log(`${nomeProcurado} NÃO está na lista!`)
}