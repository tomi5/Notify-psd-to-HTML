$(document).ready(function () {

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


    //owl carousel setting

    // get owl carousel
    let $owl = $('.owl-carousel');

    // get blockquote and cite element
    let $review = $('.testimonial-quote');
    let $client = $('.testimonial-cite');

    // declarte array for fetch data
    let clients

    // fetch clients rewiev from json.


    function getClientsReview() {
        return fetch('../clients_reviews.json')
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.log(error));
    }

    getClientsReview().then(function (result) {
        clients = result
        // set initial review display
        $client.text(clients[0].name);
        $review.text(clients[0].review)
    });

    // set data-position for each items
    $owl.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    // owl carousel options
    $owl.owlCarousel({
        center: true,
        loop: true,
        margin: 5,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
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
        },
    }).on('changed.owl.carousel', syncPosition);;



    function syncPosition() {
        // get id of centered img
        let id = $owl.find(".owl-item.center div").attr("data-id")
        displayReview(id)
    }

    // center img on click 
    $(document).on('click', '.owl-item>div', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
        let id = $(this).attr("data-id");
        displayReview(id);
    });

    function displayReview(id) {
        clients.find(client => {
            if (client.id == id) {
                $client.text(client.name);
                $review.text(client.review)
            }
        })
    };

});