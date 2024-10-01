const checkBox = document.getElementById("theme")

if (document.documentElement.dataset.theme === "dark" && !checkBox.checkBox) {
    checkBox.checked = true
}


checkBox.addEventListener("change", (a) => {
    if (checkBox.checked) {
        document.documentElement.dataset.theme = "dark"
        localStorage.setItem("theme", "dark")
    }
    if (!checkBox.checked) {
        document.documentElement.dataset.theme = "light"
        localStorage.setItem("theme", "light" )
    }
})
