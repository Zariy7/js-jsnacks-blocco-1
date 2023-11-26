let frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero' , 'limone', 'fragola'];
let frutto = 'pesca';

//ALTERNATIVE 1 = USING SPLICE
//frigorifero.splice(frigorifero.length, 0, frutto);
//console.log(frigorifero);

//ALTERNATIVE 2 = ADDING A VALUE DIRECTLY
//frigorifero [frigorifero.length] = frutto;
//console.log(frigorifero);

//ALTERNATIVE 3 = .push
frigorifero.push(frutto);
console.log(frigorifero);

frutto = 'cocomero';
flag = false;

for(let i=0; i<frigorifero.length; i++){
    if(frigorifero[i] === frutto){
        flag = true;
    }
}

if(flag){
    console.log('Trovato! Devo solo preparare il cocktail.');
}
else{
    console.log('Oh no, devo uscire a comprare il cocomero!');
}