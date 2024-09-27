document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.querySelector(".switch-theme__btn");
  const toggle = () => {
    const body = document.body;
    const checked = toggleTheme.getAttribute("aria-checked");

    const updateDOM = () => {
      if (checked === "true") {
        toggleTheme.setAttribute("aria-checked", "false");
        toggleTheme.classList.remove("dark-on");
        body.className = "light-theme";
      } else {
        toggleTheme.setAttribute("aria-checked", "true");
        toggleTheme.classList.add("dark-on");
        body.className = "dark-theme";
      }
    };

    if (!document.startViewTransition) {
      updateDOM();
      return;
    }
    document.startViewTransition(updateDOM);
  };
  toggleTheme.addEventListener("click", toggle);
});
