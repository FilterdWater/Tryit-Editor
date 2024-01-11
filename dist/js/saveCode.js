const saveCodeButton = document.getElementById("SaveCodeButton");
const saveCodeButtonModal = document.getElementById("SaveCodeButtonModal");
const codeSnippetNameInput = document.getElementById("codeSnippetName");
const closeSaveModalButton = document.getElementById("closeSaveModalButton");

// Event listeners for the buttons
saveCodeButton.addEventListener("click", openSaveCodeModal);
saveCodeButtonModal.addEventListener("click", saveCode);
closeSaveModalButton.addEventListener("click", closeSaveCodeModal);

// open the Save Code modal
function openSaveCodeModal() {
  document.getElementById("SaveCodeModal").showModal();
}

// close the Save Code modal
function closeSaveCodeModal() {
  document.getElementById("SaveCodeModal").close();
}

// save code to the JSON file
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
    }); // encodeURIComponent doet niks specials in deze applicatie want de code word all in de php code ge encode
    // Ik heb het erbij gedaan omdat ik het misschien later pas nodig heb en dan kan ik het makkelijk vinden
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

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
