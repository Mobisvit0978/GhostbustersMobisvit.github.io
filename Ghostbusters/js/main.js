const modalBtn = document.querySelector('#login');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const menuButton = document.querySelector('.m-menu-button'),
   mobilMenu = document.querySelector('.m-menu'),
   body = document.querySelector('.body');



// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
   modal.style.display = 'block';
}

// Close
function closeModal() {
   modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
   if (e.target === modal) {
      modal.style.display = 'none';
   }
}


// menuButton.addEventListener('click', openMenu);

// function openMenu() {
//   mobilMenu.style.display = 'flex',
//     body.style.overflow = 'hidden';

// }


$(document).ready(function () {
   const mMenuBtn = $('.m-menu-button');
   const mMenu = $('.m-menu');
   const tab = $('.tab')
   mMenuBtn.on('click', function () {
      mMenu.toggleClass('active')
      $('.body').toggleClass('no-scroll')
      $('.m-menu-button').toggleClass('rotate')
      $('.menu-line').toggleClass('rotate')
      $('.m-menu').toggleClass('rotate')
   });
   tab.on('click', function () {
      tab.removeClass('active');
      $(this).toggleClass('active');
      let activeTabContent = $(this).attr('data-target');
      $('.tabs-content').removeClass('visible');
      $(activeTabContent).toggleClass('visible');
   });

   var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 25,
      loop: true,
      breakpoints: {
         992: {
            slidesPerView: 4
         },
         768: {
            slidesPerView: 2
         },
         320: {
            slidesPerView: 1,
            slidesOffsetAfter: 50,
            navigation: {
               nextEl: ".button-next"
            }

         },
      }
   })
});