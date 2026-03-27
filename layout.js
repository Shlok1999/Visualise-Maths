async function loadSidebar() {
    const res = await fetch('sidebar.html')
    const html = await res.text()

    const wrapper = document.createElement("div")
    wrapper.innerHTML = html

    document.body.prepend(wrapper)

    // Reinitialize icons AFTER injection
    if (window.lucide) {
        lucide.createIcons()
    }
}

document.addEventListener("DOMContentLoaded", loadSidebar)