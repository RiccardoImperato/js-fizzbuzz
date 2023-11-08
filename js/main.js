'use strict'

// Programma che stampa in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
    // Bonus
    // Creo nel DOM un elemento html con il numero o la stringa corretta da mostrare
    // Applica stili differenti agli elementi creati, a seconda che il valore inserito sia numero, fizz, buzz o fizzbuzz
    const ul = document.querySelector('ul.list');
    const li = document.createElement('li');
    ul.append(li);
    li.classList.add('fs-4', 'text-black', 'p-3', 'm-3', 'square', 'number-bg', 'd-flex', 'justify-content-center', 'align-items-center');
    // Per i numeri che sono sia multipli di 3 che di 5 stampa in console e nel DOM “FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) {
        li.append('BuzzFizz');
        li.classList.add('buzz-fizz');
        console.log('BuzzFizz');
    }
    // Per i multipli di 3 stampa in console e nel DOM “Fizz”  
    else if (i % 3 === 0) {
        li.append('Fizz');
        li.classList.add('fizz');
        console.log('Fizz');
    }
    // Per i multipli di 5 stampa in console e nel DOM “Buzz”
    else if (i % 5 === 0) {
        li.append('Buzz');
        li.classList.add('buzz');
        console.log('Buzz');
    }
    // Per tutti gli altri stampo in console e nel DOM il numero
    else {
        li.append(`${i}`);
    }
}