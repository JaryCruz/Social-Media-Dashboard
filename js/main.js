const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('click', toggleTheme);

// Toggle Dark Class
function toggleTheme() {
    body.classList.toggle('dark');
}