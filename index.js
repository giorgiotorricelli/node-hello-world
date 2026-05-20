import { cowsay,  } from "cowsayjs";
console.log('hello boolean');

const dummyArr = ['sopra', 'la', 'panca', 'la', 'capra', 'campa'];

const envVariables = process.env;
const CMDparams = process.argv;

const myKey = envVariables.CLAUDE_API_KEY;


//stampo il terzo elemento dell'array process.argv
// console.log(CMDparams[2]);

const random = Math.floor(Math.random()*6);


console.log(cowsay(dummyArr[random]));



