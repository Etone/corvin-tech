let prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches
let theme = localStorage.getItem("theme")

document.documentElement.dataset.theme = theme == null ? prefersDarkmode ? "dark" : "light" : theme
localStorage.setItem(theme, document.documentElement.dataset.theme)