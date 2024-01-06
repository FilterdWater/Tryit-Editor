<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tryit-Editor</title>
    <link rel="stylesheet" href="output.css" />
    <link
      rel="icon"
      type="image/x-icon"
      href="./assets/images/code-svgrepo-com.svg"
    />
  </head>

  <body class="font-sans bg-orange-100 dark:bg-gray-800 h-screen flex flex-col">
    <!-- Buttons -->
    <div class="flex items-center justify-between mt-2 mx-2">
      <div class="flex items-center space-x-4">
        <button
          title="Load Code"
          id="LoadCodeButton"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
            />
          </svg>
        </button>
        <button
          title="Save Code"
          id="SaveCodeButton"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
            />
          </svg>
        </button>
        <button
          title="Change Orientation"
          onclick="changeOrientation()"
          class="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
        </button>
        <div
          class="flex items-center rounded-full bg-orange-300 p-1 dark:bg-zinc-600"
        >
          <button
            id="sunIcon"
            aria-label="LightModeBtn"
            class="cursor-pointer rounded-full bg-orange-50 p-2 dark:bg-transparent dark:text-white"
            title="Lightmode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
          <button
            id="moonIcon"
            aria-label="DarkModeBtn"
            class="cursor-pointer rounded-full bg-transparent p-2 dark:bg-zinc-900 dark:text-white"
            title="Darkmode"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              data-slot="icon"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        </div>
        <button
          title="Run Code"
          class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 font-bold"
        >
          Run Code ❯
        </button>
      </div>
    </div>
    <!-- End of Buttons -->

    <!-- Code Editor Section -->
    <div id="ContainersContainer" class="flex flex-col flex-1">
      <div
        id="editorContainer"
        class="flex-grow p-2 dark:shadow-gray-700 lg:mb-0"
      >
        <textarea
          id="codeEditorTextArea"
          class="resize-none w-full h-full p-4 border border-gray-300 bg-white dark:bg-zinc-800 dark:text-white"
        >
<!DOCTYPE html>
<html lang="en">
  <head>
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Title</title>

    <style>
      body {background-color: gray;}
    </style>

  </head>
  <body>
    <div>
      Example Html Document
    </div>
  </body>
</html>
<!-- Press Run Code To See Results --></textarea
        >
      </div>

      <!-- Result Section -->
      <div id="resultContainer" class="flex-grow p-2 dark:shadow-gray-700">
        <iframe
          src="codeResult.php"
          id="Coderesult"
          class="w-full h-full border border-gray-300"
        ></iframe>
      </div>
    </div>

    <!-- Buttons Modals -->
    <dialog id="LoadCodeModal" class="bg-white p-6 rounded-md shadow-md">
      <h1 class="mb-4">Load Code</h1>
      <select
        id="codeSnippetDropdown"
        class="p-2 outline rounded mb-4"
      ></select>
      <button
        id="LoadCodeButtonModal"
        class="bg-green-500 transition focus:outline-none focus:ring ring-black text-white px-4 py-2 rounded-md"
      >
        Load Code
      </button>
      <button
        id="closeLoadModalButton"
        class="bg-red-500 transition focus:outline-none focus:ring ring-black text-white px-4 py-2 rounded-md"
      >
        Cancel
      </button>
    </dialog>

    <dialog id="SaveCodeModal" class="bg-white p-6 rounded-md shadow-md">
      <h1 class="mb-4">Save Code</h1>
      <input
        type="text"
        id="codeSnippetName"
        placeholder="Enter code Snippet name"
        class="p-2 outline rounded mb-4"
      />
      <button
        id="SaveCodeButtonModal"
        class="bg-green-500 transition focus:outline-none focus:ring ring-black text-white px-4 py-2 rounded-md"
      >
        Save Code
      </button>
      <button
        id="closeSaveModalButton"
        class="bg-red-500 transition focus:outline-none focus:ring ring-black text-white px-4 py-2 rounded-md"
      >
        Cancel
      </button>
    </dialog>

    <script src="./js/runCode.js"></script>
    <script src="./js/theme.js"></script>
    <script src="./js/changeOrientation.js"></script>
    <script src="./js/saveCode.js"></script>
    <script src="./js/loadCode.js"></script>
  </body>
</html>
