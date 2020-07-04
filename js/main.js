// jquery
$(document).ready(function () {
  $("#homelink").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $("#aboutlink").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $(".scroll-about").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $(".scroll-projects").click(function () {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $(".scroll-contacts").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $("#contactlink").click(function () {
    $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 1000);
  });
});
$(document).ready(function () {
  $("#worklink").click(function () {
    $('html, body').animate({
      scrollTop: $("#work").offset().top
    }, 1000);
  });
});

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
// Set Initial State Of Menu
let showMenu = false;
let blurback = false;

menuBtn.addEventListener('click', toggleBlur);
menuNav.addEventListener('click', toggleBlur);
menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', toggleMenu);
function toggleBlur() {
  if (!blurback) {
    home.classList.add('blur');
    work.classList.add('blur');
    about.classList.add('blur');
    contact.classList.add('blur');
    blurback = true;
  } else {
    home.classList.remove('blur');
    about.classList.remove('blur');
    work.classList.remove('blur');
    contact.classList.remove('blur');
    blurback = false;
  }
}
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
