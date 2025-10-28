//Sticky Haeder
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');

  if (window.scrollY > 30) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
//langauge switcher

document.getElementById('languageSwitcher').addEventListener('change', function () {
  const selectedLang = this.value;
  window.location.href = `${selectedLang}_hackfolio.html`;
});
// Mobile
document.getElementById('languageSwitcherMobile').addEventListener('change', function () {
  const selectedLang = this.value;
  window.location.href = `${selectedLang}_hackfolio.html`;
});

//Up top-top
window.addEventListener('scroll', () => {
  const header = document.querySelector('.to-top');
  const vhtoTop = window.innerHeight * 2;

  if (window.scrollY > vhtoTop) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
//Menu mobile popup
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// contact function

  (function(){
      emailjs.init("SF9ebLvTXvwkepT_O"); // from your EmailJS dashboard
  })();

  document.getElementById('contact').addEventListener('submit', function(event) {
      event.preventDefault();
      const succ = document.querySelector('.send_message_succ');
      const failed = document.querySelector('.send_message_failed');

      emailjs.sendForm('service_t5rna2l', 'template_ztrdccm', this)
          .then(() => {
              succ.classList.add('active');
          }, (error) => {
              failed.classList.add('active');
          });
  });