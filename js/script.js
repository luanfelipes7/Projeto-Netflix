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

// Adicionar funcionalidade para seleção de perfis
document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile');
    
    profiles.forEach(profile => {
        profile.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            
            const img = profile.querySelector('img');
            const figcaption = profile.querySelector('figcaption');
            
            if (img && figcaption) {
                const profileData = {
                    name: figcaption.textContent,
                    image: img.src
                };
                
                localStorage.setItem('perfilAtivoNome', profileData.name);
                localStorage.setItem('perfilAtivoImagem', profileData.image);
                
                // Redirecionar para o catálogo
                window.location.href = './catalogo/catalogo.html';
            }
        });
    });
});