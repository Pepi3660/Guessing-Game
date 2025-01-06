let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;


const checkGuess = () => {
  let inputElement = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
   let guess = parseInt(inputElement.value);

  while (attempts > 0) {
    attempts -= 1;
    
    if (guess === randomNumber) {
      attempts = 0;
      feedbackElement.innerHTML = "The correct number is: " + guess;
      feedbackElement.style.color = "green";
      break;
    } else if (guess < randomNumber) {
      feedbackElement.innerHTML = "Too low!";
      feedbackElement.style.color = "red";
      break;
    } else {
       feedbackElement.innerHTML = "Too high!";
       feedbackElement.style.color = "red";
      break;
    }
  }

  if (attempts === 0 && guess != randomNumber) {
    feedbackElement.innerHTML = "The correct number is: " + randomNumber + " Game over";
    feedbackElement.style.color = "red";
  }
};
