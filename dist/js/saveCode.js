const saveCodeButton = document.getElementById("SaveCodeButton");
const saveCodeButtonModal = document.getElementById("SaveCodeButtonModal");
const codeSnippetNameInput = document.getElementById("codeSnippetName");
const closeSaveModalButton = document.getElementById("closeSaveModalButton");

// Event listeners for the buttons
saveCodeButton.addEventListener("click", openSaveCodeModal);
saveCodeButtonModal.addEventListener("click", saveCode);
closeSaveModalButton.addEventListener("click", closeSaveCodeModal);

// Function to open the Save Code modal
function openSaveCodeModal() {
  document.getElementById("SaveCodeModal").showModal();
}

// Function to close the Save Code modal
function closeSaveCodeModal() {
  document.getElementById("SaveCodeModal").close();
}

// Function to save code to the JSON file
async function saveCode() {
  const codeSnippetName = codeSnippetNameInput.value;
  const codeSnippet = document.getElementById("textareaCode").value;

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

    const responseData = await response.text(); // Use text() instead of json()

    console.log("Server response:", responseData);

    try {
      const data = JSON.parse(responseData);

      if (data.status === "success") {
        console.log("Code saved successfully!");
      } else {
        console.error("Error saving code:", data.message);
      }

      closeSaveCodeModal();
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } catch (error) {
    console.error("Error saving code:", error);
  }
}