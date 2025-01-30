document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
});

const is_html = '';

const links_to_pages = [
    `<a href="index${is_html}">ETUSIVU</a>`,
    `<a href="galleria${is_html}">GALLERIA</a>`,
    `<a href="tarinat${is_html}">TARINAT</a>`,
    `<a href="sarjakuvat${is_html}">SARJAKUVAT</a>`,
]

const page_list = document.getElementById('page_list');

links_to_pages.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item; 
    page_list.appendChild(listItem);
});