const name = "Matthew";
const age = 29;
const birthday = "January 10";
const pineapplePizza = true;
const lifeEvents = [
  "I was born in Farmington Hills, Michigan.",
  "I went to University of Michigan.",
  "I previously worked for Rocket Mortgage.",
  "I enjoy visiting big cities.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    console.log(`${randomNumber} !== 5`);
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iteration(s) to randomly generate the number 5.`
    );
    break;
  }
}

let hours = 50;
let wages = 10;
let pay = 0;

if (hours <= 40) {
  pay = hours * wages;
} else {
  let overTime = (hours - 40) * wages * 1.5;
  pay = 40 * wages + overTime;
}

let millionaire = Math.ceil(1000000 / pay);
console.log(
  `It would take ${millionaire} weeks to earn $1,000,000 if each paycheck was $${pay}.`
);
