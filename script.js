const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Fecha o menu ao clicar em um link (melhora a experiência mobile)
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

// Fecha o menu se o usuário tocar fora dele
document.addEventListener('click', (e) => {
  const isClickInsideNav = nav.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideNav && !isClickOnToggle && nav.classList.contains('active')) {
    nav.classList.remove('active');
    menuToggle.classList.remove('open');
  }
});