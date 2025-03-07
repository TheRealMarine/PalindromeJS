const start = performance.now();

const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream("numbers.txt");

const fileInterface = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
});

var palindromeSum = 0;

for await (var line of fileInterface) {
    line = line.replace(/["\s,]/g, '');
    const reversedLine = line.split("").reverse().join("");

    if (line === reversedLine) palindromeSum += parseInt(line, 2);
}

const end = performance.now();

console.log(`The sum of all palindromes is ${palindromeSum}`);
console.log(`Execution took ${end - start} ms`);