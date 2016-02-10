// JS file for Feb 9 class demo

var userName = prompt('What is your name?');
console.log('The user said their name is: ' + userName);

alert('Hi there' + userName + ', I\'m going to ask you some questions about me. Please answer Y or N');

var answer1 = prompt('Was Sam born in South Dakota?').toUpperCase();
if(answer1 === 'N') {
  alert('Nice! I was born in Germany.');
} else if (answer1 === 'Y') {
  alert('Sorry, but you\'re wrong.')
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}
