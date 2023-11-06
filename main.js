// Mathematics Quiz by GD

// Button Event List
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Variable for the score
  let score = 0;

  // Mark Question 1
  let answer1 = document.getElementById("36-in").value;

  if (answer1 === "36") {
    document.getElementById("output1").innerHTML = "Correct, great job ✅";
    score++;
  } else {
    document.getElementById("output1").innerHTML = "Incorrect, study more 😔";
  }

  // Mark Question 2
  let answer2 = document.getElementById("97-in").value;

  if (answer2 === "97") {
    document.getElementById("output2").innerHTML =
      "Correct, it's too easy for you! ✅";
    score++;
  } else {
    document.getElementById("output2").innerHTML = "Incorrect, don't be sad 😔";
  }

  // Mark Question 3
  let answer3 = document.getElementById("8-in").value;

  if (answer3 === "8") {
    document.getElementById("output3").innerHTML = "Correct, Awesome! ✅";
    score++;
  } else {
    document.getElementById("output3").innerHTML =
      "Incorrect, better luck next time 😔";
  }

  // Mark Question 4
  let answer4 = document.getElementById("28-in").value;

  if (answer4 === "28") {
    document.getElementById("output4").innerHTML = "Correct, your too good ✅";
    score++;
  } else {
    document.getElementById("output4").innerHTML = "Incorrect, it's okay 😔";
  }

  // Calculate the Percentage
  let percent = score;
  percent = (score / 4) * 100;

  // Output the Score and the Percentage
  document.getElementById("out").innerHTML = score;
  document.getElementById("percent").innerHTML = percent;
}
