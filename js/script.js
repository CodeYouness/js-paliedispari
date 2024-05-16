const userWord = prompt('insert your word')

function palindromoCheck(word) {
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
