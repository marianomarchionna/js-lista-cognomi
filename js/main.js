// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognome = prompt('Inserisci la cognome: ');

listaCognomi.push(cognome);

console.log("Lista cognomi non ordinata:")
for(var i = 0; i < listaCognomi.length; i++){
    console.log(listaCognomi[i]);
}