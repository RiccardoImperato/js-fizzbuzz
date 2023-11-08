'use strict'

// 1. Programma che stampa in console i numeri da 1 a 100

// 2. Per i multipli di 3 stampa in console “Fizz”  

// 3. Per i multipli di 5 stampa in console “Buzz”

// 4. Per i numeri che sono sia multipli di 3 che di 5 stampa in console “FizzBuzz”

for ( let i = 1; i < 100; i++ ){
    console.log(i);
    if(i % 3 === 0 && i % 5 === 0){
        console.log('BuzzFizz');
    }
    else if (i % 3 === 0){
        console.log('Fizz')
    } 
    else if(i % 5 === 0){
        console.log('Buzz')
    }
 
}