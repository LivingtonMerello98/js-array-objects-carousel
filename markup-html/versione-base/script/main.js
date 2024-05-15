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


//seleziono gli elementi del dom 
// -container
const container= document.getElementById('container')

//button prev next
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

//creiamo una funzione per popolare il carosello--> array images
function populateCarousel(images){
    //iteriamo su ciascun oggetto presente nell'array
    images.forEach(function(image, index){

        const item = document.createElement('div')
        item.classList.add('item')

        if (index === 0){
            item.classList.add('active')
        }

        //creo l'elemento img
        const img = document.createElement('img')
        img.src = image.image//da rivedere
        img.alt = image.title

        //creo l'elemento per il titolo e il testo
        const title = document.createElement('h2')
        title.textContent = image.title;
        const text = document.createElement('p')
        text.textContent = image.text

        //aggiungo img, title e text all'elemento item
        item.appendChild(img)
        item.appendChild(title)
        item.appendChild(text)

        container.appendChild(item)
    });
}

// chiamo la funzione
populateCarousel(images);



