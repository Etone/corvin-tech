let previousDarkmode = localStorage.getItem("darkmode")
let prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches

let darkmode = false

console.log(previousDarkmode)


if (previousDarkmode != null) {
    darkmode = previousDarkmode === "true"
} else {
    darkmode = prefersDarkmode
}

// initial load from either previous selection or from system defaults
const checkBox = document.getElementById("theme")
checkBox.checked = darkmode

checkBox.addEventListener("change", (a) => {
    if (checkBox.checked) {
        console.log("Swapped to darkmode")
        darkmode = true
        localStorage.setItem("darkmode", darkmode)
    }
    if (!checkBox.checked) {
        console.log("Swapped to lightmode")
        darkmode = false
        localStorage.setItem("darkmode", darkmode)
    }
})

