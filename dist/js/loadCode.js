const loadCodeButton = document.getElementById("LoadCodeButton");
const loadCodeButtonModal = document.getElementById("LoadCodeButtonModal");
const codeSnippetDropdown = document.getElementById("codeSnippetDropdown");
const closeLoadModalButton = document.getElementById("closeLoadModalButton");

// Event listeners for the buttons
loadCodeButton.addEventListener("click", openLoadCodeModal);
loadCodeButtonModal.addEventListener("click", loadCode);
closeLoadModalButton.addEventListener("click", closeLoadCodeModal);

// Function to open the Load Code modal
async function openLoadCodeModal() {
  await populateDropdown();
  document.getElementById("LoadCodeModal").showModal();
}

// Function to close the Load Code modal
function closeLoadCodeModal() {
  document.getElementById("LoadCodeModal").close();
}

// Function to populate the dropdown with code snippet names from the codeSnippets.JSON file
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
      console.error("JSON data is empty or undefined.");
    }
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error);
  }
}

// Function to load code into the textarea based on the selected dropdown item
async function loadCode() {
  const selectedSnippetName = codeSnippetDropdown.value;
  const selectedCode = await getSavedCodeSnippet(selectedSnippetName);
  document.getElementById("textareaCode").value = selectedCode;
  closeLoadCodeModal();
}

// Function to get saved code snippet from the JSON file
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
      console.error("Code snippet not found in the existing JSON file.");
      return "";
    }
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error);
    return "";
  }
}
