let prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
let theme = localStorage.getItem("theme")

// theme not set in preferences
if (theme == null) {
    document.documentElement.dataset.theme = prefersDarkmode ? "dark" : "light"
} else {
    document.documentElement.dataset.theme = theme
}

localStorage.setItem("theme", document.documentElement.dataset.theme)