let numbersLength = parseInt(prompt('Quanti numeri devo generare?'));
let numbers = [];

for(let i=0; i<numbersLength; i++){
    numbers.push(Math.floor(Math.random() * 100) +1);
}
console.log(numbers);

let printsLength = parseInt(prompt("Quanti numeri devo stampare partendo dall'ultimo?"));
let difference = numbersLength - printsLength;

if(difference < 0){
    printsLength = parseInt(prompt("Non posso togliere dall'array più elementi di quanti non ne abbia!"));
    difference = numbersLength - printsLength;
}

let prints = numbers.slice(difference);

console.log(prints);