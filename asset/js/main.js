// 1) INFO PRELIMINARI (KM ED ETA')
let km = prompt ("Quanti kilometri desideri effettuare? INSERIRE KM IN NUMERO")
console.log(km)
// MODIFICO VALORE DA STRINGA A NUMERO
km = Number(km)
console.log(typeof km)

let anni = prompt ("Quanti anni hai? INSERIRE ETA' IN NUMERO")
console.log(anni)
// MODIFICO VALORE DA STRINGA A NUMERO
anni = Number(anni)
console.log(typeof anni)


// 2) PREZZO = KM * 0.21
let prezzo = ( km * 0.21 )
console.log( prezzo)


// 3) SCONTO 20% MINORENNE SCONTO 40% OVER 65
let prezzoMinorenne = ( prezzo - ( prezzo * 0.2 ))
let prezzoMinorenneArrotondato = prezzoMinorenne.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log( 'prezzo minorenne  ' + prezzoMinorenneArrotondato)

let prezzoOver65 = ( prezzo - ( prezzo * 0.4 ))
let prezzoOver65Arrotondato = prezzoOver65.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log( 'prezzo over65  ' + prezzoOver65Arrotondato)

let prezzoStandard = prezzo
let prezzoStandardArrotondato = prezzoStandard.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log('prezzo standard  ' + prezzoStandardArrotondato)


//OUTPUT FINALE
if ( anni < 18 ) {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoMinorenneArrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoMinorenneArrotondato)
} else if ( anni > 65 ) {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoOver65Arrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoOver65Arrotondato)
} else {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoStandardArrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoStandardArrotondato)
}


