$('#start').on('click', function () {
    $('body, html').animate({
        scrollTop: $('header').offset().top
    }, 1000)
})

$('#about').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#omnie').offset().top
    }, 1000)
})

$('#projects').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#projekty').offset().top
    }, 1000)
})

$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('#kontakt').offset().top
    }, 1000)
})

const foto = document.querySelector('.photo');
const jan = function () {
    const welcome = document.querySelector('.welcome');
    welcome.classList.toggle('active');
    console.log('ok');
}
foto.addEventListener('click', jan);