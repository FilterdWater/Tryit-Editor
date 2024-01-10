const loadCodeButton = document.getElementById("LoadCodeButton");
const loadCodeButtonModal = document.getElementById("LoadCodeButtonModal");
const codeSnippetDropdown = document.getElementById("codeSnippetDropdown");
const closeLoadModalButton = document.getElementById("closeLoadModalButton");

// Event listeners for the buttons
loadCodeButton.addEventListener("click", openLoadCodeModal);
loadCodeButtonModal.addEventListener("click", loadCode);
closeLoadModalButton.addEventListener("click", closeLoadCodeModal);

//  to open the Load Code modal
async function openLoadCodeModal() {
  await populateDropdown();
  document.getElementById("LoadCodeModal").showModal();
}

//  to close the Load Code modal
function closeLoadCodeModal() {
  document.getElementById("LoadCodeModal").close();
}

//  to populate the dropdown with code snippet names from the codeSnippets.JSON file
async function populateDropdown() {
  try {
    const response = await fetch("codeSnippets.json", { cache: "no-store" });
    const data = await response.json();

    codeSnippetDropdown.innerHTML = "";

    if (data) {
      data.forEach((snippet) => {
        const option = document.createElement("option");
        option.value = snippet.name;
        option.text = snippet.name;
        codeSnippetDropdown.add(option);
      });
    } else {
      alert("JSON file is empty.");
    }
  } catch (error) {
    alert("Error fetching or parsing JSON file:", error);
  }
}

//  to load code into the textarea based on the selected dropdown item
async function loadCode() {
  const selectedSnippetName = codeSnippetDropdown.value;
  const selectedCode = await getSavedCodeSnippet(selectedSnippetName);
  const codeEditorTextArea = document.getElementById("codeEditorTextArea");
  codeEditorTextArea.value = decodeEntities(selectedCode);
  closeLoadCodeModal();
}

//  to decode HTML entities
function decodeEntities(encodedString) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = encodedString;
  return textArea.value;
}

//  to get saved code snippet from the JSON file
async function getSavedCodeSnippet(codeSnippetName) {
  try {
    const response = await fetch("codeSnippets.json", { cache: "no-store" });
    const data = await response.json();

    const selectedSnippet = data.find(
      (snippet) => snippet.name === codeSnippetName
    );

    if (selectedSnippet) {
      return selectedSnippet.code;
    } else {
      alert("Code snippet not found in the JSON file.");
      return "";
    }
  } catch (error) {
    alert("Error fetching or parsing JSON file:", error);
    return "";
  }
}
