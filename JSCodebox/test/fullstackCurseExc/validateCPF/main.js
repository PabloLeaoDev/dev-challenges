(function validateCpf() {
    const cpf = '705.484.450-52';
    const cleanCpf = cpf.replace(/\D+/g, '');
    const arrCpf = Array.from(cleanCpf);

    function getLastCpfDigits(arrCpf) {
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

    function multChar(arrCpf) {
        const isNineOrTen = arrCpf.length - 1 === 9 ? 9 : 10;
        const arrOfMultNum = [];
        let mult;
        for (let i = isNineOrTen + 1, j = 0; i >= 2, j < isNineOrTen; i--, j++) {
                mult = Number(arrCpf[j]) * i;
                arrOfMultNum.push(mult);
        }
        return arrOfMultNum;
    }
    
    function sumChar(arrCpf) {
        const total = arrCpf.reduce((ac, value) => ac + Number(value), 0);
        console.log(total);
    }
})();