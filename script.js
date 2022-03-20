// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");

const darkModeToggle = document.querySelector("#dark-mode-toggle");

// check if dark mode is enabled
// if it;s enables, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
}

const disableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove('darkmode');
    // 2. update darkMode in the localStorage
    localStorage.setItem("darkMode", null);
}
// if the user aldready viited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}
// when someone clicks the button
darkModeToggle.addEventListener("click", () => {
    // get their darkMode setting
    darkMode = localStorage.getItem("darkMode");
      // if it not current enabled, enable it
    if (darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    }
    // if it has been enabled, turn it off 
    else {
        disableDarkMode();
        console.log(darkMode);
    }
});