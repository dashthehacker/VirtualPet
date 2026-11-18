document.addEventListener("DOMContentLoaded", () => {
    const debugValue = localStorage.getItem("debug");
    if (debugValue === null) {
      localStorage.setItem("debug", "false");
      //console.log("Debug key created with default value: false");
    } else if (debugValue === "true") {
      const debugContainer = document.getElementById("debug-btns");
      debugContainer.classList.remove("hidden-debug");
      window.resetAll = function() {
        if (confirm("Do you wanna forget everything?")) {
            localStorage.removeItem("virtualPetSave");
            localStorage.removeItem("green");
            localStorage.removeItem("debug");
        }
      };
    } else if (debugValue !== "false") {
      localStorage.setItem("debug", "false");
    } else {
    }
  });
  