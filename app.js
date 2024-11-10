function hamburger() {
  // Pilih elemen hamburger dan menu
  const hamburgerMenu = document.querySelector(".rizki-hamburger-menu");
  const navbarMenu = document.querySelector(".rizki-container-ul-navbar");

  // Toggle kelas untuk animasi hamburger dan menampilkan menu navbar
  hamburgerMenu.classList.toggle("rizki-active-hamburger");
  navbarMenu.classList.toggle("rizki-show-navbar");

  const hamburger = document.querySelector(".rizki-hamburger-menu");
  const navList = document.querySelector(".rizki-container-ul-navbar");

  let isMenuVisible = false;
  hamburger.addEventListener("click", () => {
    isMenuVisible = !isMenuVisible;

    // Toggle kelas untuk animasi muncul
    if (isMenuVisible) {
      navList.classList.add("rizki-active-ul");
      navList.classList.remove("rizki-remove-ul");
    } else {
      navList.classList.remove("rizki-remove-ul");
      navList.classList.add("rizki-active-ul"); 
    }
  });
}

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
