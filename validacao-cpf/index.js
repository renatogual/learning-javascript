function validateCPF(cpf) {
    let formatedCPF = cpf.slice(0, 11).replace(/\D+/g, '');
    let firstDigitOriginal = cpf.slice(12, 13);
    let secondDigitOriginal = cpf.slice(13, 14);

    let arrayCPF = formatedCPF.split('');

    let descendingSequenceFirstDigit = descendingSequence(10);
    let descendingSequenceSecondDigit = descendingSequence(11);

    let arrayFirstDigit = [];
    let arraySecondDigit = [];
    
    arrayCPF.forEach((e, i) => {
        arrayFirstDigit.push(e * descendingSequenceFirstDigit[i]);
        arraySecondDigit.push(e * descendingSequenceSecondDigit[i]);
    });

    let accFirstDigit = arrayFirstDigit.reduce((acc, next) => acc + next);
    let accSecondDigit = arraySecondDigit.reduce((acc, next) => acc + next);

    let firstDigit = 11 - (accFirstDigit % 11);
    let secondDigit = 11 - (accSecondDigit % 11);

    // if(firstDigit > 9) firstDigit = 0;
    // if(secondDigit > 9) secondDigit = 0;
    
    // if(firstDigitOriginal == firstDigit && secondDigitOriginal == secondDigit) return true;
    // else return false;
    console.log('firstOrig', firstDigitOriginal);
    console.log('secondOrig', secondDigitOriginal);

    console.log('first', firstDigit);
    console.log('second', secondDigit);
}

function descendingSequence(number) {
    let first = 2;
    let array = [];
    for(let i=first; i <= number; i++) {
        array.push(i);
    }
    return array.reverse();
}

validateCPF('043.515.721-32');