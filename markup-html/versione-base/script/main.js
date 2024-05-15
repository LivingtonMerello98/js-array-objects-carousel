'use strict'

console.log('ciao')

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];



// Seleziono gli elementi del carosello dall'HTML
const itemsContainer = document.querySelector('.items');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Questa funzione popola dinamicamente il carosello con l'array di oggetti
function populateCarousel(index) {
    // Ottengo l'elemento corrente dall'array di oggetti
    const currentItem = images[index];
    // Seleziono l'elemento attivo nel carosello
    const activeItem = document.querySelector('.item.active');

    // Aggiorno l'HTML dell'elemento attivo con l'immagine, il titolo e il testo corrispondenti all'elemento corrente
    activeItem.innerHTML = `
        <img src="${currentItem.image}" alt="">
        <div class="content">
            <h2>${currentItem.title}</h2>
            <p>${currentItem.text}</p>
        </div>
    `;
}

// Dichiaro una variabile per tenere traccia dell'indice corrente nell'array di oggetti
let currentIndex = 0;

// Popolo il carosello con il primo elemento dell'array quando la pagina viene caricata
populateCarousel(currentIndex);

// Aggiungo un gestore di eventi per il click sul pulsante precedente
prevButton.addEventListener('click', () => {
    // Aggiorno l'indice corrente, tornando all'ultimo elemento se siamo già al primo
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    // Popolo il carosello con l'elemento corrispondente all'indice aggiornato
    populateCarousel(currentIndex);
});

// Aggiungo un gestore di eventi per il click sul pulsante successivo
nextButton.addEventListener('click', () => {
    // Aggiorno l'indice corrente, tornando al primo elemento se siamo già all'ultimo
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    // Popolo il carosello con l'elemento corrispondente all'indice aggiornato
    populateCarousel(currentIndex);
});

