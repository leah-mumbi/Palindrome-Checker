const userInput = document.getElementById("text-input");
const checkPalindromeBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkPalindrome = (inputText) => {
  const originalInput = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reverseInput = originalInput.split("").reverse().join("");
  return reverseInput === originalInput;
};

document.getElementById("check-btn").addEventListener("click", function () {
  let inputText = document.getElementById("text-input").value.trim();

  if (!inputText) {
    alert("Please input a value");
  } else {
    const isPalindrome = checkPalindrome(inputText);
    const resultDiv = document.getElementById("result");

    if (isPalindrome) {
      resultDiv.innerText = `${inputText} is a palindrome`;
    } else {
      resultDiv.innerText = `${inputText} is not a palindrome`;
    }

    resultDiv.classList.remove("hidden");
  }
});
