import { cowsay,  } from "cowsayjs";
import { ChatAnthropic } from "@langchain/anthropic";
import { HumanMessage } from "langchain";
console.log('hello boolean');

const dummyArr = ['sopra', 'la', 'panca', 'la', 'capra', 'campa'];

const envVariables = process.env;
const CMDparams = process.argv;

const myKey = envVariables.CLAUDE_API_KEY;

//stampo il terzo elemento dell'array process.argv
// console.log(CMDparams[2]);

const random = Math.floor(Math.random()*6);
console.log(cowsay(dummyArr[random]));

const model = new ChatAnthropic({
    model: 'claude-sonnet-4-6',
    apiKey: myKey
});

model.invoke([
    new HumanMessage('Mi racconti una barzelletta zozza?')
]).then(aiResp => {
    console.log(aiResp.content);
})



