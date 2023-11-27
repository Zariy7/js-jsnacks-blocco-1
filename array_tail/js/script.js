let numbersLength = parseInt(prompt('Quanti numeri devo generare?'));
let numbers = [];

for(let i=0; i<numbersLength; i++){
    numbers.push(Math.floor(Math.random() * 100) +1);
}
console.log(numbers);

let printsLength = parseInt(prompt("Quanti numeri devo stampare partendo dall'ultimo?"));
let difference = numbersLength - printsLength;

while(difference < 0){
    printsLength = parseInt(prompt("Non posso togliere dall'array più elementi di quanti non ne abbia!"));
    difference = numbersLength - printsLength;
}

let prints = numbers.slice(difference);

//WASN'T SURE IF I HAD TO PRINT THE WHOLE SECOND ARRAY OR IT'S NUMBERS SEPARATELY.
//DECIDED THAT THE WHOLE ARRAY LOOKED PRETTIER IN THE CONSOLE. 
//for(let i=0; i<printsLength; i++){
//    console.log(prints[i]);
//}
console.log(prints);