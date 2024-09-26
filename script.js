// Troca de tema
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
});

// Validação de e-mail com Formspree
document.getElementById('contact-form').addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        e.preventDefault();
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        emailError.style.color = 'red';
    } else {
        emailError.textContent = '';
    }
});
