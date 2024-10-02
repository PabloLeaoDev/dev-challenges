class Cpf {
    constructor(cpf) {
        this.cpf = cpf;
        const cleanCpf = cpf.replace(/\D+/g, '');
        this.arrCpf = Array.from(cleanCpf);
    }

    validateCpf() {
        const [a, b] = this.getLastCpfDigits(this.arrCpf);
        let param1, param2, param3, num;
        for (let i = 0; i < 2; i++) {
            this.arrCpf.pop();
            param1 = this.multChar(this.arrCpf);
            param2 = this.sumChar(param1);
            num = i === 0 ? b : a;
            param3 = this.validateCpfFormula(param2, num);
            if (!param3) {
                console.log('This CPF is invalid.');
                return false;
            }
        }
            console.log('This CPF is valid.');
            return true;
    }

    multChar(arrCpf) {
        const arrOfMultNum = [];
        let mult;
        for (let i = arrCpf.length + 1, j = 0; i >= 2, j <= arrCpf.length - 1; i--, j++) {
            mult = Number(arrCpf[j]) * i;
            arrOfMultNum.push(mult);
        }
        return arrOfMultNum;
    }

    sumChar(arrCpf) {
        const result = arrCpf.reduce((ac, value) => ac + Number(value), 0);
        return result;
    }

    getLastCpfDigits(arrCpf) {
        const arrCpfCopy = [...arrCpf];
        const lastCpfDigits = [];
        let digit;
        for (let i = 0; i < 2; i++) {
            digit = Number(arrCpfCopy.pop());
            lastCpfDigits.push(digit);
        }
        lastCpfDigits.reverse();
        return lastCpfDigits;
    }

    validateCpfFormula(totalSumChar, numToBeValidated) {
        let formula = 11 - (totalSumChar % 11);
        if (formula > 9) formula = 0;
        if (numToBeValidated !== formula) return false;
        return true;
    }
}

(function CpfValidator() {
    const cpf = new Cpf('705.484.450-52');
    cpf.validateCpf();
})();
