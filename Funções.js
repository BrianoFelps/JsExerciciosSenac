function somar (par1, par2) {
    const res = par1 + par2;
    console.log(res);
}

somar(14, 21);

function somar2(num1, num2){
    const res = num1 + num2;
    return res;
}

console.log(somar2(1, 2));

const numero1 = () => {
    return Math.random();
}

console.log(numero1());