/*
LE DIRETTIVE DI QUEST'ESERCITAZIONE PREVENODO LA NON CONCESSINE RIGUARDO LA MODIFICA DELLE VARIBILI CONSEGNA POSTE SULLA SOMMITA' DI QUESTO DOCUMENTO (RIGHE 8-13).
TUTTAVIA L'ESERCIZZIO 4 PREVEDE DI TRASFORMARE IL CONTENUTO DELLA VARIABILE "greeting" DA MAIUSCOLO A MINUSCOLO MA IL CONTENUTO RISULTA GIA MINUSCOLO, NE DEDUCO QUINDI CHE SI TRATTI DI UN TYPO.
A QUESTO PROPOSITO ANDRO' IO STESSO A MODIFICARE IL CONTENUTO DELLA VARIABILE "greeting" ALLO SCOPO DI UN CORRETTO SVOLGIMENTO DELL'ESERCIZIO 4.
MI ASSUMERO' OGNI RESPONSABILITA' IN CASO DI ERRORE O MAL'INTERPRETAZIONE DELLA CONSEGNA
*/ 

const mountain = "Monte Bianco"; // NON MODIFICARE QUESTA RIGA
const activities = "Escursionismo, Arrampicata, Sci, Fotografia"; // NON MODIFICARE QUESTA RIGA
const greeting = "Buona giornata"; // NON MODIFICARE QUESTA RIGA
const elevation = "4810"; // NON MODIFICARE QUESTA RIGA
const weather = "nebbioso"; // NON MODIFICARE QUESTA RIGA

// 1. Estrai un carattere specifico
// Estrai il carattere alla posizione 6 nella variabile mountain usando charAt()
const sixthChar = mountain.charAt(6); // Indici partono da 0
console.log(sixthChar);

// 2. Verifica se una stringa contiene una sottostringa
// Verifica se la variabile activities contiene la parola 'Sci' e stampa il risultato (true/false)
const hasSki = activities.indexOf("Sci");
    if (hasSki == -1) {
        console.log("false")
    }
    else {
        console.log("true")
    }
// console.log(hasSki);

// 3. Converti una stringa in numero e fai un calcolo
// Converti la variabile elevation in un numero e aggiungi 10, poi stampa il risultato
const elevationNumber = parseInt(elevation);
const newElevation = elevationNumber + 10;
console.log(newElevation);

// 4. Trasforma tutto in minuscolo
// Trasforma tutto in minuscolo la stringa della variabile greeting

const lowerCaseGreeting = greeting.toLowerCase();
console.log(lowerCaseGreeting);

// 5. Ripeti una stringa
// Ripeti la stringa weather 3 volte con uno spazio tra le ripetizioni e stampa il risultato
const repeatedWeather = weather.repeat(3);
console.log(repeatedWeather);

// 6. Estrai una sottostringa usando substr()
// Estrai 'Bianco' dalla variabile mountain usando substr()
const mountainSubstr = false;
console.log(mountainSubstr);

// 7. Aggiungi padding a una stringa
// Aggiungi zeri all'inizio della variabile elevation per renderla lunga 6 caratteri
const paddedElevation = true;
console.log(paddedElevation);

// 8. 4Carlo
const songTitle = "welcome to tijuana"; // NON MODIFICARE QUESTA RIGA

// Trasforma la stringa in modo che la prima lettera di welcome e tijuana siano maiuscole
// P.S: serviti della funzione charAt() per completare il task.
const capitalizedTitle = "" + songTitle.slice(9); // attento forse ci sara' da fare un fix e ovviamente un aggiunta
console.log(capitalizedTitle); // Output: "Welcome to Tijuana"