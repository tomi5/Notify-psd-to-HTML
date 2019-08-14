// header carousel interval

$('.carousel').carousel({
    interval: 3000
})


// email validation for newsletter submit

$('#newsletter').on('submit', function (e) {
    e.preventDefault();
    if ($('#newsletter')[0].checkValidity() === false || $('#email').val() === "") {
        e.preventDefault();
        e.stopPropagation()
    } else {
        $('#confirm').modal('show')
    }
    $('#newsletter').addClass('was-validated')
})


//owl carousel

$(document).ready(function () {

    let owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 5,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 10
            },
            1000: {
                items: 21
            }
        }
    });



});