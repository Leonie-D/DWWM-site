const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.getElementById('menu');
const menuLink = Array.from(document.querySelectorAll('.menu a'));

function menuManagement () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded')); 
  toggleMenu.setAttribute('aria-expanded', !open); //!open permet de basculer entre true et false sur le aria-expanded
  menu.hidden = !menu.hidden;
  document.body.dataset.burger = !open;
};

toggleMenu.addEventListener('click', function() {
  menuManagement();
});

for (let element of menuLink) {
    element.addEventListener('click', function() {
    menuManagement();
  });
};

// ajouter que plus aucun lien n'est actif