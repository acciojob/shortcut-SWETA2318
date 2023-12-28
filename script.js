function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1 === "" || s2 === "") {
    return "";
  }

  // Extract the initial letters and convert them to uppercase
  const initialLetters = s1.charAt(0).toUpperCase() + s2.charAt(0).toUpperCase();

  return initialLetters;
}

// Prompt the user for input
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");

// Call the function and display the result
alert(shortcut(s1, s2));