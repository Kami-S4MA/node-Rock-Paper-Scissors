let validMoves = {
  r: "Rock",
  p: "Paper",
  s: "Scissors"
}

console.log(validMoves);
const prompt = require("prompt-sync")({ sigint: true });
const userMove = prompt("Enter one of the above: ");



if(Object.keys(validMoves).includes(userMove)){
  console.log("You choose: "+validMoves[userMove]);
  
  const random = Math.floor(Math.random() * Object.keys(validMoves).length);
  const cpuMove = Object.keys(validMoves)[random]

  console.log("CPU Chooses: "+ validMoves[cpuMove]);

  if(userMove === cpuMove){
    console.log("Game was a DRAW");
  }

  else if((userMove === "r" && cpuMove === "s") || (userMove === "s" && cpuMove === "p") || (userMove === "p" && cpuMove === "r")){
    console.log("You Win");
  }

  else{
    console.log("You Loose");
  }
}

else{
  console.log("Incorrect Input");
}