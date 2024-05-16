### Palidroma
1. Chiedere all’utente di inserire una parola
2. Creare una funzione per capire se la parola inserita è palindroma

    **Soluzione**
    - chiedo all utente una parola
    - creo una funzione che:
        1. prende l ultima lettera della parola inserita
        2. la inserisce al primo posto in un altro contenitore
        3. ripete un altra volta i primi due punti finche non finisce la parola dell utente
        4. confronta la parola dell'utente con quella generata al contrario e:
            - se è uguale allora è vero
            - se è diversa allora è falso
    - richiamo la funzione con la parola inserita dall'utente


### Pari e Dispari
1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
3. Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
4. Dichiariamo chi ha vinto.

    **Soluzione**
    - chiedo all'utente se vuole pari o dispari
    - chiedo all'utente un numero da 1 a 5
    - genero un numero random da 1 a 5 per il computer
    - creo una funzione che:
        1. somma i due numeri e se:
            - diviso 2 da resto 0, allora è vero
            - diviso 2 da resto 1, allora è falso
    - dal risultato della funzione dirò se:
        - se è vero e l'utente ha inserito pari allora dirò "complimenti, hai vinto"
        - se è falso e l'utente ha inserito dispari allora dirò "complimenti, hai vinto"
        - in tutti gli altri casi dirò: "mi dispiace, hai perso"


**Consigli del giorno**
- Scriviamo sempre in italiano i passaggi che vogliamo fare
- Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.