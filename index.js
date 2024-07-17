function gradeWithIf(score) {
  if (isNaN(score)) {
    console.log("Not a Number");
  } else if (score > 100 || score < 0) {
    console.log("Invalid Score");
  } else if (score === 100) {
    console.log("Perfect Score");
  } else if (score >= 85) {
    console.log("You got an A");
  } else if (score >= 75) {
    console.log("You got a B");
  } else if (score >= 65) {
    console.log("You got a C");
  } else if (score >= 50) {
    console.log("You got a D");
  } else {
    console.log("You got an F");
  }
}
let score = prompt("Enter your exam score: ");
score = parseInt(score);
gradeWithIf(score);

