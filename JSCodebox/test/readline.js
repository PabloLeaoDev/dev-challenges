export default async function input(prompt) {
    return new Promise((resolve) => {
        const rl = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(prompt, (anwser) => {
            rl.close();
            resolve(anwser);
        });
    });
}

(async () => {
    try {
        const num1 = Number(await input('Primeiro número: '));
        const num2 = Number(await input('Segundo número: '));
        console.log(`A soma entre os números é: ${num1 + num2}`);
    } catch (err) {
        console.error(err);
    }
})();