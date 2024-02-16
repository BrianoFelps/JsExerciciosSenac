var a = 1;
var b = 2;//number
var c = '1';//string     
var d = '2';               
                         
console.log(a == b);
console.log(c == d); 

console.log(a === c); //Igualdade estrita, number com string dá false
console.log(b == d); //Igualdade comum, number com string é convertido, true

console.log(typeof c == typeof d);