const userWord = prompt('insert your word')

function palindromoCheck(word) {
    let reversedWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i]
    }
    console.log(reversedWord)
}


