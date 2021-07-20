// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
var cognome = prompt('Inserisci la cognome: ');
//lettera maiuscola al cognome inserito
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);

listaCognomi.push(cognome);

//metodo per ordinare alfabeticamente un vettore
listaCognomi.sort();
console.log("Lista cognomi ordinata:")
for(var i = 0; i < listaCognomi.length; i++){
    console.log(listaCognomi[i]);
}
//trovare posizione nuovo elemento
console.log("Posizione 'umana' nuovo cognome: ", listaCognomi.indexOf(cognome) + 1);