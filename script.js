//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let int1=9
let int2=10

if(int1>int2){
  console.log(`${int1} è piu grande di ${int2}`)
}
  else if (int2>int1){
    console.log(`${int1} è piu piccolo di ${int2}`)
  }
  else{
    console.log(`${int1} è uguale a ${int2}`)
  }

console.log("")
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num=19
if(num<5){
  console.log("Tiny")
}else if(num<10){
    console.log("Small")
  }else if(num<15){
      console.log("Medium")
    }else if(num<20){
        console.log("Large")
      }else{
        console.log("Huge")
      }
console.log("")

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let x=0; x<=10; x++){
  if((x===3)||(x===8)){
  continue;
  }
  console.log(x);
}

console.log("")


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for(let dp=0;dp<=15;dp++){
  if(dp%2===0){
    console.log(`${dp} Pari`)
  }else{
    console.log(`${dp} Dispari`)
  }
}
console.log("")

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let i1=4
let i2=1
let val=null

if((i1===8)||(i2===8)||(i1-i2===8)||(i2-i1===8)){
  console.log(val=true)
}else{console.log(val=false)}

console.log("")

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart=12
// let spedizione=10
// let checkout=null

// if(totalShoppingCart>50){
//   spedizione=null
// }
// console.log(checkout=totalShoppingCart+spedizione)





/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart=30
let spedizione=10
let checkout=null
let sconto=20

totalShoppingCart-=sconto/100*totalShoppingCart
console.log(`Carrello cliente ${totalShoppingCart}€`)
if(totalShoppingCart>50){
  spedizione=null
  console.log("Spedizione Gratis")
}else{
  console.log(`Costo spedizione ${spedizione}€`)
}
console.log(`Il cliente pagherà ${checkout=totalShoppingCart+spedizione}€`)

console.log("")



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale=false
let gender=(isMale===true)?"male":"female"
console.log(gender)

console.log("")




/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let numero=1;numero<=100;numero++){
   if((numero%3)===0){
     if((numero%5)===0){
       console.log("FizzBuzz")
     }
     console.log("Fizz")
   }else{
     if((numero%5)===0)
     {
       console.log("Buzz")
     }else{
       console.log(numero)
     }
   }
 }

// for(let i1=1;i1<=100;i1++){
//   if((i1%3)===0&&(i1%5)===0){
//     console.log("FizzBuzz")
//     continue
//   }
//   if((i1%3)===0){
//   console.log("Buzz")
//   continue
//   }
//   if((i1%5)===0){
//     console.log("Fizz")
//     continue
//   }
//   console.log(i1)
// }

