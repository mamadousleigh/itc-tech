const toggleMenu=document.getElementById('menu-toggle');
const menuLinks=document.getElementById('nav-links');
toggleMenu.addEventListener('click',()=>{
  menuLinks.classList.toggle('active');
  toggleMenu.classList.toggle('is-active')
})