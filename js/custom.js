$(document).ready(function(){

    // ========= mega menu ==============
    $('.menu-btn').click(function(){
      $('.menu-bar').addClass('active');
    });

    $('.menu-hide').click(function(){
      $('.menu-bar').removeClass('active');
    });
    // ========= mega menu ==============

});


// ============ Preloader ===============
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});
// ============ Preloader ===============


// ============= swiper slider ===================

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination-nmbr",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
// ============= swiper slider ===================