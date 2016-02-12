// JS file for Feb 9 class demo

//Introductions
var userName = prompt('What is your name?');
console.log('The user said their name is: ' + userName);
var correctAnswers = 0;

alert('Hi there ' + userName + ', I\'m going to ask you some questions about myself. Please answer Y or N');

//Questions
function question1 (){
  var answer1 = prompt('Does \"Mike\" have a background in information security?').toLowerCase();
  if(answer1 === 'y' || answer1 === 'yes') {
    alert('Correct! I worked in information security for the past thireen years.');
    correctAnswers++;
  } else if (answer1 === 'n' || answer1 === 'no') {
    alert('Sorry, but you\'re wrong.');
  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
  console.log('Users response to QUESTION ONE is: ' + answer1);
  console.log('User has answered ' + correctAnswers+ ' question correctly.');
}
question1();


function question2 (){
  var answer2 = prompt('Does \"Mike\" have a background in software development?').toLowerCase();
  if(answer2 === 'n' || answer2 === 'no') {
    alert('Great work! Unfortunately I do not have a dev background, at least not yet...');
    correctAnswers++;
  } else if (answer2 === 'y' || answer2 === 'yes') {
    alert('Sorry, but you\'re wrong.');
  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
  console.log('Users response to QUESTION TWO is: ' + answer2);
  console.log('User has answered ' + correctAnswers+ ' questions correctly.');
}
question2();

function question3 (){
  var answer3 = prompt('Has \"Mike\" ever worked for Cisco systems?').toLowerCase();
  if(answer3 === 'y' || answer3 === 'yes') {
    alert('Great job! I have indeed spent time working for Cisco and it was fun!');
    correctAnswers++;
  } else if (answer3 === 'n' || answer3 === 'no') {
    alert('Sorry, but you\'re wrong.');
  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
  console.log('Users response to QUESTION THREE is: ' + answer3)
  console.log('User has answered ' + correctAnswers+ ' questions correctly.');
}
question3();

function question4 (){
  var answer4 = prompt('Is \"Mike\" already up to speed on HTML, CSS, and JavaScript.').toLowerCase();
  if(answer4 === 'n' || answer4 === 'no') {
    alert('That is correct! Unfortunately, I am not up to speed on these, yet...');
    correctAnswers++;
  } else if (answer4 === 'y' || answer4 === 'yes') {
    alert('Sorry, but you\'re wrong.');
  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
  console.log('Users response to QUESTION FOUR is: ' + answer4)
  console.log('User has answered ' + correctAnswers+ ' questions correctly.');
}
question4

function question5 (){
  var answer5 = prompt('Is \"Mike\'s\" pursuit of the 401 track to become a iOS or Java guru?').toLowerCase();
  if(answer5 === 'n' || answer5 === 'no') {
    alert('Nice job! I am very interested in begining with Python.')
    correctAnswers++;
  } else if (answer5 === 'y' || answer5 === 'yes') {
    alert('Sorry, but you\'re wrong.');
  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
  console.log('Users response to QUESTION FIVE is: ' + answer5)
  console.log('User has answered ' + correctAnswers+ ' questions correctly.');
}
question5();

//Begining of Thursday AM Lab Questions
function question6 (){
  for(count = 0; count < 4; count++) {
    answer6 = parseInt(prompt('How many years has \"Mike\" been in the information security industry?'));
    console.log('User guessed: ' + answer6);
    if(answer6 >= 15 && count < 4) {
      alert('Unfortunately, I have not even been in the workforce for that long. Try guessing a little lower next time.');
    } else if (answer6 <= 13 && count < 4) {
      alert('Unfortunately, I have been in the InfoSec field a litte longer than that. Try guessing a little higher next time.');
    } else if (answer6 === 14) {
      alert('That is correct! I have been in the InfoSec industry for 14 years.');
      count = 4;
      console.log('User answered correctly!');
      correctAnswers++;
    } else if (answer6 === NaN) {
      alert('Please make sure you enterd a numerical value.');
      count--;
      console.log('Did we make it here?');
    }
  }
}
question6();

function question7 (){
  var mikesCity = ['san diego', 'honolulu']
  var correct = false;
  console.log(mikesCity);
  while(correct === false) {
    var answer7 = prompt('Which is one of the two cities I would \"Mike\" like to live in?').toLowerCase();
    console.log('The user guessed: ' + answer7)
    for(var i = 0; i < mikesCity.length; i++) {
      if(answer7 === mikesCity[i]) {
        alert('Thats right! I difinately wouldnt mind living in the beautiful city of Honolulu or San Diego!');
        correct = true;
        correctAnswers++;
      }
    }
    if(correct === false) {
      alert('Sorry, but I would prefer living in the beautiful city of Honolulu or San Diego!')
    }
  }
}
question7();

//Thanks and See You Later
alert('That completes our about Mike time! You got ' + correctAnswers + '/7 questions right. Thanks for getting to know me.')
