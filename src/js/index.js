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