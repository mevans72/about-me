// JS file for Feb 9 class demo

//Introductions
var userName = prompt('What is your name?');
console.log('The user said their name is: ' + userName);

alert('Hi there ' + userName + ', I\'m going to ask you some questions about myself. Please answer Y or N');

//Questions
var answer1 = prompt('Does \"Mike\" have a background in information security?').toLowerCase();
if(answer1 === 'y' || answer1 === 'yes') {
  alert('Nice! I worked in information security for the past thireen years.');
} else if (answer1 === 'n' || answer1 === 'no') {
  alert('Sorry, but you\'re wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
console.log('Users response to QUESTION ONE is: ' + answer1);

var answer2 = prompt('Does \"Mike\" have a background in software development').toLowerCase();
if(answer2 === 'n' || answer2 === 'no') {
  alert('Great work! Unfortunately I do not have a dev background, at least not yet...');
} else if (answer2 === 'y' || answer2 === 'yes') {
  alert('Sorry, but you\'re wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
console.log('Users response to QUESTION TWO is: ' + answer2);

var answer3 = prompt('Has \"Mike\" ever worked for Cisco systems?').toLowerCase();
if(answer3 === 'y' || answer3 === 'yes') {
  alert('Great job! I have indeed spent time working for Cisco and it was fun!');
} else if (answer3 === 'n' || answer3 === 'no') {
  alert('Sorry, but you\'re wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
console.log('Users response to QUESTION THREE is: ' + answer3)

var answer4 = prompt('Is \"Mike\" already up to speed on HTML, CSS, and JavaScript.').toLowerCase();
if(answer4 === 'n' || answer4 === 'no') {
  alert('That is correct! Unfortunately, I am not up to speed on these, yet...')
} else if (answer4 === 'y' || answer4 === 'yes') {
  alert('Sorry, but you\'re wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
console.log('Users response to QUESTION FOUR is: ' + answer4)

var answer5 = prompt('Is \"Mike\'s\" pursuit of the 401 track to become a iOS or Java guru?').toLowerCase();
if(answer5 === 'n' || answer5 === 'no') {
  alert('Nice job! I am very interested in begining with Python.')
} else if (answer5 === 'y' || answer5 === 'yes') {
  alert('Sorry, but you\'re wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
console.log('Users response to QUESTION FIVE is: ' + answer5)


//My poor and initial attempt at a stretch goal...
var answer6 = parseInt(prompt('How many years has \"Mike\" been in the information security industry?'));
console.log(answer6);

if(isNaN(answer6)) {
  prompt('Please make sure you enterd a numerical value.');
} else if(answer6 === 14) {
  alert('That is correct! I have been in the InfoSec industry for 14 years.');
} else {
  for(count = 0; count < 4; count++) {
    if(answer6 >= 15 && count < 4) {
      var answer6 = parseInt(prompt('Unfortunately, I have not even been in the workforce for that long. Try guessing a little lower next time.'));
      count++;
      console.log(answer6);
    } else if (answer6 <= 13 && count < 4) {
      var answer6 = parseInt(prompt('Unfortunately, I have been in the InfoSec field a litte longer than that. Try guessing a little higher next time.'));
      count++;
      console.log(answer6);
    }
  }
}
console.log('loop done')

if(count = 4 && answer6 !== 14) {
  alert('Sorry, but you\'re out of guesses.');
}

//Thanks and See You Later
alert('That completes our about Mike time! Thanks for getting to know me.')
