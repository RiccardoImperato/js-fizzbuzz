'use strict'

// 1. Programma che stampa in console i numeri da 1 a 100

// 2. Per i multipli di 3 stampa in console “Fizz”  

// 3. Per i multipli di 5 stampa in console “Buzz”

// 4. Per i numeri che sono sia multipli di 3 che di 5 stampa in console “FizzBuzz”

/* Bonus
1. Creo nel DOM un elemento html con il numero o la stringa corretta da mostrare
2. Applica stili differenti agli elementi creati, a seconda che il valore inserito sia numero, fizz, buzz o fizzbuzz
*/

for ( let i = 1; i < 101; i++ ){
    console.log(i);
    const ul = document.querySelector('ul.list');
    const li = document.createElement('li');
    ul.append(li);
    li.classList.add('fs-4','text-black', 'p-3', 'm-3', 'square', 'number-bg', 'd-flex', 'justify-content-center', 'align-items-center' )

    if(i % 3 === 0 && i % 5 === 0){
        li.append('BuzzFizz');
        li.classList.add('buzz-fizz');
        console.log('BuzzFizz');
    }
    else if (i % 3 === 0){
        li.append('Fizz');
        li.classList.add('fizz');
        console.log('Fizz');
    } 
    else if(i % 5 === 0){
        li.append('Buzz');
        li.classList.add('buzz');
        console.log('Buzz');
    }
    else {
    li.append(`${i}`);

    }

}