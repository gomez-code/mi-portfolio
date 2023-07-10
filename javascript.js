document.querySelector('#nav-bootstrap .navbar-toggler').addEventListener('click', function() {
  document.querySelector('#nav-bootstrap').classList.toggle('menu-opened');
});

document.querySelectorAll('#nav-bootstrap .offcanvas-header .btn-close').forEach(function(button) {
  button.addEventListener('click', function() {
    document.querySelector('#nav-bootstrap').classList.remove('menu-opened');
    window.scrollTo(0, 0);
  });
});