//Função de soma com resultado sendo mostrado
function somar (par1, par2) {
    const res = par1 + par2;
    console.log(res);
}

// Não esqueça de chamar a função
somar(14, 21);

// Função de soma com return em vez de c.log
function somar2(num1, num2){
    const res = num1 + num2;
    return res;
}

console.log(somar2(1, 2));

// Função de flecha demonstrada
const numero1 = () => {
    return Math.random();
}

console.log(numero1());