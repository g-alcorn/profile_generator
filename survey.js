const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

let profile = {};

rl.question('What is your name?\n', (answer) => {
  //do the task
  profile.name = answer;
  rl.question('What is your favorite type of music?\n', (answer) => {
    profile.music = answer;
    rl.question('What type of food would you eat every day for the rest of your life?\n', (answer) => {
      profile.food = answer;
      rl.question('What is your favorite hobby?\n', (answer) => {
        profile.hobby = answer;
        rl.close();
        console.log(`This is ${profile.name}'s profile! \n\n${profile.name} loves to listen to ${profile.music}. If they could choose, they would eat ${profile.food} and do ${profile.hobby} every day!`);
      });
    });
  });
});