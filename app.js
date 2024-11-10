function hamburger() {
  // Pilih elemen hamburger dan menu
  const hamburgerMenu = document.querySelector(".rizki-hamburger-menu");
  const navbarMenu = document.querySelector(".rizki-container-ul-navbar");

  // Toggle kelas untuk animasi hamburger dan menampilkan menu navbar
  hamburgerMenu.classList.toggle("rizki-active-hamburger");
  navbarMenu.classList.toggle("rizki-show-navbar");

  let isMenuVisible = false;
  hamburgerMenu.addEventListener("click", () => {
    isMenuVisible = !isMenuVisible;

    // Toggle kelas untuk animasi muncul
    if (isMenuVisible) {
      navbarMenu.classList.add("rizki-active-ul");
    } else {
      navbarMenu.classList.remove("rizki-remove-ul");
    }
  });
}

// Dropdown Menu on Hover
const navItems = document.querySelectorAll(".rizki-container-ul-navbar .rizki-li-menu");

if (navItems.length) {
  navItems.forEach((item) => {
    const caret = item.querySelector(".rizki-caret-dropdown");
    const dropdown = item.querySelector(".rizki-dropdown-navbar");
    let hideDropdownTimeout; 

    // Event listener saat kursor di-hover
    item.addEventListener("mouseover", () => {
      clearTimeout(hideDropdownTimeout); 
      if (dropdown) {
        dropdown.style.display = "block"; 
      }
      if (caret) {
        caret.classList.add("rizki-caret-active");
      }
    });

    item.addEventListener("mouseleave", () => {
      hideDropdownTimeout = setTimeout(() => {
        if (dropdown) {
          dropdown.style.display = "none"; 
        }
        if (caret) {
          caret.classList.remove("rizki-caret-active");
        }
      }, 200);
    });
  });
}
