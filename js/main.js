// header carousel interval

$('.carousel').carousel({
    interval: 5000
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