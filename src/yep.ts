const numbers:number[] = [1,2,4,5,6];
const multi = (numbers.map(numbers => numbers * 2));
console.log("multi Func: " + multi);

const words:string[] = ["hi", "hallo","test","willkommen","soissesneee"];
const longerThanFive = words.filter(words => words.length > 5);
console.log("longerThanFive Func: " + longerThanFive);

const newNumbers:number[] = [7,8,9,10,11];
const calcNumbers = newNumbers.reduce((oldSum, newSum) => oldSum + newSum,0);
console.log("calcNumbers Func: " + calcNumbers);

const evenNewerNumbersHoly:number[] = [13,1,4,15,6];
const checkIfGreaterThan10 = evenNewerNumbersHoly.some(evenNewerNumbersHoly => evenNewerNumbersHoly > 10);
console.log("checkIfGreaterThan10 Func: " + checkIfGreaterThan10);
