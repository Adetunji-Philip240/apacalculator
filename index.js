


//Navbar
function toggleMenu() {
  const menu = document.getElementById("menu");
  const toggler = document.getElementById("toggler");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    toggler.classList.remove("fa.bars");
    toggler.classList.add("fa-times");
  } else {
    toggler.classList.remove("fa-times");
    toggler.classList.add("fa-bars");
  }
}
