const saveCodeButton = document.getElementById("SaveCodeButton");
const saveCodeButtonModal = document.getElementById("SaveCodeButtonModal");
const codeSnippetNameInput = document.getElementById("codeSnippetName");
const closeSaveModalButton = document.getElementById("closeSaveModalButton");

// Event listeners for the buttons
saveCodeButton.addEventListener("click", openSaveCodeModal);
saveCodeButtonModal.addEventListener("click", saveCode);
closeSaveModalButton.addEventListener("click", closeSaveCodeModal);

//  to open the Save Code modal
function openSaveCodeModal() {
  document.getElementById("SaveCodeModal").showModal();
}

//  to close the Save Code modal
function closeSaveCodeModal() {
  document.getElementById("SaveCodeModal").close();
}

//  to save code to the JSON file
async function saveCode() {
  const codeSnippetName = codeSnippetNameInput.value.trim().replace(" ", "-");
  const codeSnippet = document.getElementById("codeEditorTextArea").value;

  try {
    const response = await fetch("php/saveCode.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `codeSnippetName=${encodeURIComponent(
        codeSnippetName
      )}&codeSnippet=${encodeURIComponent(codeSnippet)}`,
    });

    const responseData = await response.text();

    try {
      const data = JSON.parse(responseData);

      if (data.status === "success") {
        alert("Code saved successfully!");
      } else {
        alert("Error saving code:", data.message);
      }

      closeSaveCodeModal();
    } catch (error) {
      alert("Error parsing JSON:", error);
    }
  } catch (error) {
    alert("Error saving code:", error);
  }
}
