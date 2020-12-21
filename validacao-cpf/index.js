function validateCPF(cpf) {
    let formatedCPF = cpf.replace(/\D+/g, '');

    if(typeof cpf === 'undefined') return false;
    if(formatedCPF.length !== 11) return false;

    let firstDigitOriginal = formatedCPF.slice(9, 10);
    let secondDigitOriginal = formatedCPF.slice(10, 11);

    let arrayCPF = formatedCPF.slice(0, 9).split('');

    let descendingSequenceFirstDigit = descendingSequence(10);
    let arrayFirstDigit = [];
    arrayCPF.forEach((e, i) => arrayFirstDigit.push(e * descendingSequenceFirstDigit[i]));
    let accFirstDigit = arrayFirstDigit.reduce((acc, next) => acc + next);
    let firstDigit = 11 - (accFirstDigit % 11);

    let descendingSequenceSecondDigit = descendingSequence(11);
    let arraySecondDigit = [];
    let novoArrayCPF = [...arrayCPF, Number(firstDigit)];
    novoArrayCPF.forEach((e, i) => arraySecondDigit.push(e * descendingSequenceSecondDigit[i]));
    let accSecondDigit = arraySecondDigit.reduce((acc, next) => acc + next);
    let secondDigit = 11 - (accSecondDigit % 11);

    if(firstDigit > 9) firstDigit = 0;
    if(secondDigit > 9) secondDigit = 0;
    
    if(firstDigitOriginal == firstDigit && secondDigitOriginal == secondDigit) return true;    
    else return false;
}

function descendingSequence(number) {
    let first = 2;
    let array = [];
    for(let i=first; i <= number; i++) {
        array.push(i);
    }
    return array.reverse();
}

const cpf = validateCPF('04351572132');

if(cpf) console.log('CPF Válido !!!');
else console.log('CPF Inválido !!!');
