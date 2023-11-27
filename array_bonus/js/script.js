let arrayOne = ['a', 'b', 'c', 'd'];
let arrayTwo = ['u', 'v', 'x', 'y', 'z', 'epsilon', 'gamma', 'theta'];
let shorter = '';

if(arrayOne.length == arrayTwo.length){
    console.log('The arrays are the same length!');
}
else{
    if(arrayOne.length < arrayTwo.length){
        for(let i=arrayOne.length; i<arrayTwo.length; i++){
            arrayOne.push(Math.floor(Math.random() * 25) +1);
        }
    }
    else{
        for(let i=arrayTwo.length; i<arrayOne.length; i++){
            arrayTwo.push(Math.floor(Math.random() * 25) +1);
        }
    }
}

console.log(arrayOne);
console.log(arrayTwo);