Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione


Creare un carosello come nella foto allegata.


Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.


Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.


BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.


BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.


BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.




//Milestone 1 
•Selezionare gli elementi del DOM necessari:

    Selezionare l'elemento contenitore del carosello.
    Selezionare gli elementi per le frecce "prev" e "next".

•Creare una funzione per popolare il carosello:

    Iterare sull'array images.
    Per ogni oggetto nell'array, creare un elemento <div> per l'immagine con il titolo e il testo corrispondenti.
    Aggiungere la classe "active" al primo elemento per renderlo visibile inizialmente.

•Gestire gli eventi di click sulle frecce:

    Aggiungere eventi di click agli elementi delle frecce.

Quando viene cliccata una freccia:
    Nascondere l'elemento attualmente attivo.
    Mostrare l'elemento successivo o precedente nell'array images.
    Aggiornare il titolo e il testo dell'immagine attiva.

•Assicurarsi che il carosello sia infinito:

    Quando si raggiunge l'ultimo elemento nell'array images e si clicca su "next", il carosello dovrebbe tornare al primo elemento.
    Quando si è sul primo elemento e si clicca su "prev", il carosello dovrebbe mostrare l'ultimo elemento.
