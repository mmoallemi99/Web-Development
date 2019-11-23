window.onscroll = function() {
  myFunction();
};
let navbar = document.querySelector(".stickyNavbar");
let sticky = navbar.offsetTop;
// let mainNav = document.querySelector(".navbar");
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// let rellax = new Rellax(".rellax");
// window.onscroll = () => {
//   console.clear();
//   console.log(window.pageYOffset);
// };
