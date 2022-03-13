const d = document;
const ls = localStorage;

const $btnBlueMode = d.getElementById("btnBlueMode"),
$btnLightMode = d.getElementById("btnLightMode"),
$btnPurpleMode = d.getElementById("btnPurpleMode");

/* atribute selectors */

const $dataThemeContainer = d.querySelector("[data-theme-container]"),
$dataThemeDisplay = d.querySelector("[data-theme-display]"),
$dataThemeCalculator = d.querySelector("[data-theme-calculator]"),
$dataThemeNumber = d.querySelectorAll("[data-theme-number]"),
$dataThemeOperatorDelete = d.querySelectorAll("[data-theme-operator-delete]"),
$dataThemeOperatorEqual = d.querySelector("[data-theme-operator-equal]");

const removeClasses = (data) => {
    $dataThemeContainer.classList.remove(`${data}Container`);
    $dataThemeDisplay.classList.remove(`${data}Display`);
    $dataThemeCalculator.classList.remove(`${data}Calculator`);
    $dataThemeNumber.forEach((el) => el.classList.remove(`${data}ThemeNumber`));
    $dataThemeOperatorDelete.forEach((el) => el.classList.remove(`${data}ThemeOperatorDelete`));
    $dataThemeOperatorEqual.classList.remove(`${data}ThemeOperatorEqual`);
}

const addClasses = (data) => {
    $dataThemeContainer.classList.add(`${data}Container`);
    $dataThemeDisplay.classList.add(`${data}Display`);
    $dataThemeCalculator.classList.add(`${data}Calculator`);
    $dataThemeNumber.forEach((el) => el.classList.add(`${data}ThemeNumber`));
    $dataThemeOperatorDelete.forEach((el) => el.classList.add(`${data}ThemeOperatorDelete`));
    $dataThemeOperatorEqual.classList.add(`${data}ThemeOperatorEqual`);
    ls.setItem("theme", data);
}

const changeTheme = () => {
    let actualTheme = ls.getItem("theme");
    if(actualTheme === null);
    removeClasses(actualTheme);
} 

const purpleMode = () => {
    let theme = "purple";
    changeTheme();
    addClasses(theme);
}

const lightMode = () => {
    let theme = "light";
    changeTheme();
    addClasses(theme);
}

const blueMode = () => {
    let theme = "blue";
    changeTheme();
    addClasses(theme);
}

/* listeners */

d.addEventListener("click", (e) => {
    console.log($btnBlueMode);
    if(e.target.matches("#btnBlueMode")) {
        blueMode();
        return;
    }

    if(e.target.matches("#btnLightMode")) {
        lightMode();
        return;
    }

    if(e.target.matches("#btnPurpleMode")) {
        purpleMode();
        return;
    }
})

d.addEventListener("DOMContentLoaded", () => {
    console.log(ls.getItem("theme"));
    const theme = ls.getItem("theme");
    if(theme === null) {
        ls.setItem("theme", "blue");
        return;
    }

    if(theme === "light") {
        lightMode();
    }

    if(theme === "blue") {
        blueMode();
    }

    if(theme === "purple") {
        purpleMode();
    }
});