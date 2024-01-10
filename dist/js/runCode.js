// Code variable to store the textarea input
let code;

// JavaScript for handling the "Run Code" button
const runCodeButton = document.querySelector(".bg-green-500");
runCodeButton.addEventListener("click", () => {
  RunCode();
});

function RunCode() {
  // Update the content of the file within the iframe with the code
  code = document.getElementById("codeEditorTextArea").value;
  const iframe = document.getElementById("Coderesult");
  iframe.contentDocument.open();
  iframe.contentDocument.write(code);
  iframe.contentDocument.close();
}

document.addEventListener("DOMContentLoaded", function () {
  code = document.getElementById("codeEditorTextArea").value;
  RunCode();
});
