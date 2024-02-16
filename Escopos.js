var a = 1; //var é universal

for (i = 0; i <= 10; i++){

    var o = i + a;
    console.log(o);

    let w = 32; //let não é universal

if (o <= 10){
    console.log(":>")
} else {
    console.log(":<")
    }
}

console.log(o); //var é universal
console.log(w); //let não é universal, está no bloco for{}