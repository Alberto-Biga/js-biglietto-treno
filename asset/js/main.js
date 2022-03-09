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
console.log( 'prezzo minorenne  ' + prezzoMinorenne)

const prezzoOver65 = ( prezzo - ( prezzo * 0.4 ))
console.log( 'prezzo over 65  ' + prezzoOver65)

const prezzoStandard = prezzo
console.log('prezzo standard  ' + prezzoStandard)

if ( anni < 18 ) {
    console.log ('prezzo definitivo  ' + prezzoMinorenne)
} else if ( anni > 65 ) {
    console.log ('prezzo definitivo  ' + prezzoOver65)
} else {
    console.log ('prezzo definitivo  ' + prezzoStandard)
}



// 4) OUTPUT PREZZO FINALE 2 CIFRE DECIMALI