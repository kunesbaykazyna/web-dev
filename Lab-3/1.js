const sentence = prompt();
const joinChar = prompt();

const words = sentence.split(" ");
const result = words.join(joinChar);

console.log(result);
