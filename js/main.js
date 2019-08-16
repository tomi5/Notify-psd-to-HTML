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
    let $review = $('.testimonials__quote');
    let $client = $('.testimonials__cite');

    // START - Clients review array -- disable if use fetch from json
    let clients = [{
            id: 1,
            name: "Veena Statists",
            review: `"Consectetur esse elit cillum adipisicing est proident dolor. Cupidatat magna pariatur nulla deserunt velit aliquip sint cillum eu est cupidatat reprehenderit exercitation."`,
        },
        {
            id: 2,
            name: "Coxa Bitties",
            review: `"Anim magna officia eu officia amet enim minim Lorem laboris aliqua nostrud adipisicing incididunt aute. Exercitation minim adipisicing reprehenderit amet duis nulla et elit."`,
        },
        {
            id: 3,
            name: "Thacking Towelettes",
            review: `"Officia commodo cupidatat velit dolor duis amet mollit aliqua. Aliquip eiusmod ea labore ad pariatur anim."`,
        },
        {
            id: 4,
            name: "Peptic Hippin",
            review: `"Est commodo est est ex velit qui adipisicing. Laborum ex sunt sit ullamco occaecat occaecat duis fugiat cillum voluptate."`,
        },
        {
            id: 5,
            name: "Resolidifying Desulphuriser",
            review: `"Id amet et id dolor duis tempor culpa qui consequat. Et Lorem reprehenderit veniam exercitation in sunt minim laboris veniam."`,
        },
        {
            id: 6,
            name: "Coprince Photocard",
            review: `"Occaecat tempor deserunt eiusmod laboris qui ut sint cillum. Duis irure reprehenderit cupidatat reprehenderit laboris cillum commodo voluptate ut eiusmod veniam."`,
        },
        {
            id: 7,
            name: "Muscatorium Pollywig",
            review: `"Magna pariatur laborum minim excepteur eu sit velit ex aute consectetur minim. Nostrud velit eu esse ut adipisicing nostrud."`,
        },
        {
            id: 8,
            name: "Slivovic Unwreaked",
            review: `"Enim aliqua esse reprehenderit ipsum commodo cillum cillum ut amet sit laboris. Eu veniam anim et sint ut elit consectetur."`,
        },
        {
            id: 9,
            name: "Matties Misprogramed",
            review: `"Culpa magna est tempor ex voluptate laborum Lorem. Dolore voluptate sunt id culpa consequat ullamco excepteur dolore ex minim."`,
        },
        {
            id: 10,
            name: "Overemphasize Didrachma",
            review: `"Exercitation labore ea velit deserunt ipsum ut est reprehenderit anim enim tempor nulla adipisicing. Irure incididunt mollit irure pariatur ut eiusmod minim irure eu proident nisi laborum culpa."`,
        },
        {
            id: 11,
            name: "Discourage Doabs",
            review: "Ea incididunt ipsum culpa enim amet quis incididunt ex nostrud deserunt in qui qui velit. Adipisicing dolore proident anim nostrud id.",
        },
        {
            id: 12,
            name: "Parasitise Toxoplasma",
            review: `"Est ipsum culpa ullamco exercitation ut ipsum pariatur exercitation ex dolore consectetur veniam minim sit. Excepteur velit ea ipsum minim in id pariatur."`,
        },
        {
            id: 13,
            name: "Intuitional Polyphagous",
            review: `"Commodo ullamco in aliqua veniam ex occaecat ea est laboris est do sit do voluptate. Veniam reprehenderit officia excepteur officia ut."`,
        },
        {
            id: 14,
            name: "Almighty Foxings",
            review: `"Ullamco ullamco ullamco eiusmod proident eu occaecat amet incididunt veniam aute est veniam ad. Aute ad eiusmod duis quis aute elit quis velit nostrud duis."`,
        },
        {
            id: 15,
            name: "Ghylls Dendroglyph",
            review: `"Voluptate voluptate mollit cupidatat esse eiusmod. Veniam cillum dolor reprehenderit laboris cupidatat fugiat Lorem sit ad amet in."`,
        },
        {
            id: 16,
            name: "Syntagmata Dramatic",
            review: `"Voluptate aliqua ex ullamco ipsum deserunt occaecat. Voluptate qui cupidatat voluptate officia ex ea mollit dolor."`,
        },

    ]

    // END - Clients review array

    // -- START fetch clients rewiev from json.

    // // declare array for fetch data
    // let clients

    // function getClientsReview() {
    //     return fetch(`../clients_reviews.json`)
    //         .then(response => {
    //             if (response.ok) {
    //                 return response
    //             }
    //             throw Error(response.status)
    //         })
    //         .then(response => response.json())
    //         .then(data => data)
    //         .catch(error => {
    //             console.log(error)
    //             $client.text("John Doe");
    //             $review.text(`"Et sint reprehenderit exercitation aliquip culpa est excepteur voluptate."`)
    //         });
    // }

    // // pass fetch result to cliets var 
    // getClientsReview().then(function (data) {
    //     clients = data
    //     // set initial review display
    //     $client.text(clients[0].name);
    //     $review.text(clients[0].review)
    // });

    // -- END fetch

    // set data-position for each items
    $owl.children().each(function (index) {
        $(this).attr('data-position', index);
    });

    // owl carousel setup
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
    }).on('translated.owl.carousel', syncPosition);;

    // - START set initial review display - disable if fetch from json use
    $client.text(clients[0].name);
    $review.text(clients[0].review)
    // - END set initial review display

    function syncPosition() {
        // get id of centered img and pass it to displayReview funct
        let id = $owl.find(".owl-item.center div").attr("data-id")
        displayReview(id)
    }


    $(document).on('click', '.owl-item>div', function () {
        // centering img on click
        $owl.trigger('to.owl.carousel', $(this).data('position'));
        // get id of clicked img and pass it to displayReview funct
        let id = $(this).attr("data-id");
        displayReview(id);
    });

    // display client review in HTML blockqoute container
    function displayReview(id) {
        clients.find(client => {
            if (client.id == id) {
                $client.text(client.name);
                $review.text(client.review)
            }
        })
    };

});