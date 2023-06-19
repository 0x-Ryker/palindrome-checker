// Get references to the necessary HTML elements
const inputText = document.getElementById("input-text");
const result = document.getElementById("result");
const btn = document.getElementById("btn");

// Add an event listener to the button
btn.addEventListener("click", () => {
  // Get the value entered in the input field
  const word = inputText.value;

  // Remove any whitespace and convert the word to lowercase
  const cleanWord = word.toLowerCase().replace(/\s/g, "");

  // Reverse the word
  const reversedWord = cleanWord.split("").reverse().join("");

  // Check if the reversed word is the same as the original word
  if (cleanWord === reversedWord) {
    result.textContent = `${word} is a palindrome! ✅`;
  } else {
    result.textContent = `${word} is not a palindrome. ❌`;
  }
});
