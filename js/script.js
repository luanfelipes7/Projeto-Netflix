const themeToggle = document.getElementById('checkbox');
const themeText = document.getElementById('theme-text');
const body = document.body;

// Verifica se o usuário já tem uma preferência salva
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
    themeToggle.checked = true;
    updateStatusText();
}

themeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        localStorage.removeItem('theme');
    }
    updateStatusText();
});

function updateStatusText() {
    if (body.classList.contains('light-mode')) {
        themeText.textContent = 'Modo Escuro';
    } else {
        themeText.textContent = 'Modo Claro';
    }
}