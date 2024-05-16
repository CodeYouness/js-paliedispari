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

const userChoice = prompt('fa la tua scelta, pari o dispari?').toLowerCase().trim();
let userNumber = Number.parseInt(prompt('scegli un numero da 1 a 5'), 10)
let computerNumber = getRandomInt(1, 5)

function getRandomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

if (userNumber > 5 || userNumber < 1) {
    userNumber = getRandomInt(1, 5)
    console.log('siccome non rispetti le regole, ho cambiato il tuo numero in: ' + userNumber)
}

function numberEvenOrShots(firstNumber, secondNumber) {
    if ((firstNumber + secondNumber) % 2 == 0) {
        return true
    } else {
        return false
    }
}

let sfida = numberEvenOrShots(userNumber, computerNumber)
console.log('computer:', computerNumber, 'il tuo numero:', userNumber, 'la tua scelta:', userChoice)

if (sfida && userChoice === 'pari') {
    console.log('complimenti, hai vintissimo')
} else if (sfida === false && userChoice === 'dispari') {
    console.log('complimenti, hai vintissimo')
} else {
    console.log('bravo, hai perso')
}