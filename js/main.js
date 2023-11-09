'use strict'

// Seleziono l'elemento html nel DOM in cui inserire l'elemento creato
const ul = document.querySelector('ul.list');

// Programma che stampa in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Creo nel DOM un elemento html con il numero o la stringa corretta da mostrare
    const li = document.createElement('li');
    // Per i numeri che sono sia multipli di 3 che di 5 stampa in console e nel DOM “FizzBuzz”
    if (i % 3 === 0 && i % 5 === 0) {
        li.append('FizzBuzz');
        li.classList.add('fizz-buzz');
        console.log(i, 'FizzBuzz');
    }
    // Per i multipli di 3 stampa in console e nel DOM “Fizz”  
    else if (i % 3 === 0) {
        li.append('Fizz');
        li.classList.add('fizz');
        console.log(i, 'Fizz');
    }
    // Per i multipli di 5 stampa in console e nel DOM “Buzz”
    else if (i % 5 === 0) {
        li.append('Buzz');
        li.classList.add('buzz');
        console.log(i, 'Buzz');
    }
    // Per tutti gli altri stampo in console e nel DOM il numero
    else {
        console.log(i);
        li.append(`${i}`);
    }
    // Inserico l'elemento creato nel DOM
    ul.append(li);
    // Applica stili differenti agli elementi creati, a seconda che il valore inserito sia numero, fizz, buzz o fizzbuzz
    li.classList.add('fs-4', 'text-black', 'p-3', 'm-3', 'square', 'number-bg', 'd-flex', 'justify-content-center', 'align-items-center');
}