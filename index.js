/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  const hour = parseInt(timeString.split(":")[0]);
  let greeting = "Good Morning"

  if (hour >= 17) {
      greeting = "Good Evening"
    } else if (hour >= 12) {
      greeting = "Good Afternoon"
  }

  return greeting
}

function displayMessage(greetingMsg) {
  const greetingNode = document.getElementById("greeting");
  greetingNode.textContent = greetingMsg;
}

