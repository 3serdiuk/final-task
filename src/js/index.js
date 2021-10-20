import $ from 'jquery';

$(".burger-menu").click(function () {
    console.log($(".burger-menu"));
    $(".burger-menu").toggleClass("open-menu");
});

$(".burger-menu").click(function () {
    console.log($(".burger-menu"));
    $(".header__nav").toggleClass("open-menu");
});

$(".burger-menu").click(function () {
    console.log($(".burger-menu"));
    $("body").toggleClass("open-menu");
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });