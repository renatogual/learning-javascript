class ValidateCPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g, '');
        this.firstDigit = this.cpf.slice(-2, -1);
        this.secondDigit = this.cpf.slice(-1);
        this.partialCPF = this.cpf.slice(0, 9).split('');
    }

    checksEntry() {
        if(typeof this.cpf == 'undefined') return false;
        if(this.cpf.length != 11) return false;
        if(this.cpf[0].repeat(11) == this.cpf) return false;
        return true;
    }

    findFirstDigitCalculated() {
        let arrayFirstDigitCalculated = [];
        this.partialCPF.forEach((element, index) => {
            arrayFirstDigitCalculated.push(element * this.descendingSequence(10)[index]);
        })
        let accFirstDigitCalculated = arrayFirstDigitCalculated.reduce((acc, next) => acc + next);
        let firstDigitCalculated = 11 - (accFirstDigitCalculated % 11);

        if(firstDigitCalculated > 9) firstDigitCalculated = 0;

        return firstDigitCalculated;
    }

    findSecondDigitCalculated() {
        let arraySecondDigitCalculated = [];
        let newArrayPartialCPF = [...this.partialCPF, this.findFirstDigitCalculated()];
        newArrayPartialCPF.forEach((element, index) => {
            arraySecondDigitCalculated.push(element * this.descendingSequence(11)[index]);
        })
        let accSecondDigitCalculated = arraySecondDigitCalculated.reduce((acc, next) => acc + next);
        let secondDigitCalculated = 11 - (accSecondDigitCalculated % 11);

        if(secondDigitCalculated > 9) secondDigitCalculated = 0;

        return secondDigitCalculated;
    }

    descendingSequence(number) {
        let first = 2;
        let array = [];
        for(let i=first; i <= number; i++) {
            array.push(i);
        }
        return array.reverse();
    }
}

function main(value) {
    const cpf = new ValidateCPF(value);

    if(!cpf.checksEntry()) {
        console.log('CPF informado não é válido !');
    } 
    else if(cpf.firstDigit == cpf.findFirstDigitCalculated() && cpf.secondDigit == cpf.findSecondDigitCalculated()) {
        console.log('CPF informado é válido !');
    } else {
        console.log('CPF informado não é válido !');
    }
}

main('04351572132');
