<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    saveCodeSnippet();
}

function saveCodeSnippet() {
    try {
        $codeSnippetName = $_POST['codeSnippetName'];
        $codeSnippet = $_POST['codeSnippet'];

        $jsonFile = '../codeSnippets.json';

        // Read existing data
        $data = json_decode(file_get_contents($jsonFile), true);

        // Find existing snippet index
        $existingSnippetIndex = array_search($codeSnippetName, array_column($data, 'name'));

        // Prepare new snippet
        $newSnippet = [
            'name' => $codeSnippetName,
            'code' => htmlentities($codeSnippet), // Encode HTML Symbols
        ];

        // Update or add snippet
        if ($existingSnippetIndex !== false) {
            $data[$existingSnippetIndex] = $newSnippet;
        } else {
            $data[] = $newSnippet;
        }

        // Save updated data back to the file
        file_put_contents($jsonFile, json_encode($data, JSON_PRETTY_PRINT));

        // Respond to the client
        echo json_encode(['status' => 'success']);
        exit;
    } catch (Exception $e) {
        // Handle any exceptions
        echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
        exit;
    }
}
?>
