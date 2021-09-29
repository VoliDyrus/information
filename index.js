const abc = require("./information");
const cowSay = require("cowsay");

console.log(
  cowSay.say({
    text: `hello i'm ${abc.name} and i'm from ${abc.campus}`,
    e: "oO",
    T: "U",
  })
);
