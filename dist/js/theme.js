document.addEventListener("DOMContentLoaded", () => {
  // Icons
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");

  // Theme variables
  const userTheme = localStorage.getItem("theme") || "";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Save theme to localStorage
  const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  // Set the initial theme and apply it to the document
  const setInitialTheme = () => {
    const currentTheme = userTheme || (systemTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    saveTheme(currentTheme);
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = document.documentElement.classList.toggle("dark")
      ? "dark"
      : "light";
    saveTheme(newTheme);
  };

  // Event listener for theme switch
  sunIcon.addEventListener("click", toggleTheme);
  moonIcon.addEventListener("click", toggleTheme);

  // Invoke setInitialTheme when the DOM is ready
  setInitialTheme();
});
