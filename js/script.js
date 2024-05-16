//palindroma

const userWord = prompt('insert your word')

function palindromoCheck(word) {
    word = word.toLowerCase().trim()
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    if (word === reversedWord) {
        console.log('è palindroma')
        return true
    } else {
        console.log('non è palindroma')
        return false
    }
}

let result = palindromoCheck(userWord)
console.log(result)

//pari e dispari

//const userChoice = prompt('fa la tua scelta, pari o dispari?');
//let userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5'), 10)

function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

if (userNumber > 5 && userNumber < 1) {
    userNumber = getRandomInt(1, 5)
    console.log('siccome non rispetti le regole, ho cambiato il tuo numero in: ' + userNumber)
}




console.log(userChoice, userNumber)