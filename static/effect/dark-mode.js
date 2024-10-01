const checkBox = document.getElementById("theme")

checkBox.checked = document.documentElement.dataset.theme === "dark"

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
