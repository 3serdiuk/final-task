import $ from 'jquery';

$(document).ready(function () {
    console.log("ready!");
});

$(".burger-menu").click(function () {
    console.log($(".burger-menu"));
    $(".burger-menu").toggleClass("open-menu");
});

$(".burger-menu").click(function () {
    console.log($(".burger-menu"));
    $(".header__nav").toggleClass("open-menu");
});