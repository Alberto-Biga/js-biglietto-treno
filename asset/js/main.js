// 1) INFO PRELIMINARI (KM ED ETA')
const km = prompt ("Quanti kilometri desideri effettuare? INSERIRE KM IN NUMERO")
console.log(km)

const anni = prompt ("Quanti anni hai? INSERIRE ETA' IN NUMERO")
console.log(anni)


// 2) PREZZO = KM * 0.21
const prezzo = ( km * 0.21 )
console.log(prezzo)


// 3) SCONTO 20% MINORENNE SCONTO 40% OVER 65
const prezzoMinorenne = ( prezzo - ( prezzo * 0.2 ))
const prezzoMinorenneArrotondato = prezzoMinorenne.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log( 'prezzo minorenne  ' + prezzoMinorenneArrotondato)

const prezzoOver65 = ( prezzo - ( prezzo * 0.4 ))
const prezzoOver65Arrotondato = prezzoOver65.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log( 'prezzo over65  ' + prezzoOver65Arrotondato)

const prezzoStandard = prezzo
const prezzoStandardArrotondato = prezzoStandard.toFixed(2) //PREZZI ARROTONDATI 2 CIFRE DECIMALI
console.log('prezzo standard  ' + prezzoStandard)


//OUTPUT FINALE
if ( anni < 18 ) {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoMinorenneArrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoMinorenne)
} else if ( anni > 65 ) {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoOver65Arrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoOver65)
} else {
    document.getElementById("target-container").innerHTML = "Il prezzo è di " + prezzoStandardArrotondato + " euro";
    console.log ('prezzo definitivo  ' + prezzoStandard)
}


