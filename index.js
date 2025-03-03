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

    if (line === reversedLine) {
        console.log(`${line} is a palindrome`);
        palindromeSum += parseInt(line, 2)
    } else {
        console.log(`${line} is not a palindrome`);
    }
}

console.log(`The sum of all palindromes is ${palindromeSum}`);