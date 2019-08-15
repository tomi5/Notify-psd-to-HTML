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


    $(document).ready(function () {

        let $sync1 = $('#sync1');
        let $sync2 = $('#sync2');


        $sync1.owlCarousel({
            center: true,
            loop: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            items: 1,
            mouseDrag: false,
            touchDrag: false,
        }).on('changed.owl.carousel', syncPosition);

        $sync2.owlCarousel({
            center: true,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            slideBy: 1,

            responsiveRefreshRate: 300,
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
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {

            let centerEl = document.querySelector("#sync1 div.center .item")
            let centerElID = centerEl.getAttribute("data-clientID")

            let imgs = document.querySelectorAll("#sync2 .owl-item .item")

            // var count = el.item.count - 1;
            // // var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            // if (current < 0) {
            //     current = count;
            // }
            // if (current > count) {
            //     current = 0;
            // }

            for (let i = 0; i < imgs.length; i++) {
                if (imgs[i].dataset.clientid === centerElID) {
                    imgs[i].classList.add('center')
                }
            }

            // $sync2
            //     .find(".owl-item")
            //     .removeClass("current")
            //     .eq(current)
            //     .addClass("current");
            // var onscreen = $sync2.find('.owl-item.active').length - 1;
            // var start = $sync2.find('.owl-item.active').first().index();
            // var end = $sync2.find('.owl-item.active').last().index();

            // if (current > end) {
            //     $sync2.data('owl.carousel').to(current, 100, true);
            // }
            // if (current < start) {
            //     $sync2.data('owl.carousel').to(current - onscreen, 100, true);
            // }
        }

        function syncPosition2(el) {
            console.log("Test")
        }

        $sync2.on("click", ".owl-item", function (e) {
            e.preventDefault();
            let imgId = ($(this.children).attr("data-clientID"))
            console.log(imgId)

            $sync1
                .find(".owl-item")
                .removeClass("center")

            let testimArr = document.querySelectorAll("#sync1 .item")
            console.log(testimArr)
            for (let i = 0; i < testimArr.length; i++) {
                if (testimArr[i].dataset.clientid === imgId) {
                    console.log(testimArr[i])
                    console.log(testimArr[i].parentElement)
                    testimArr[i].parentElement.classList.add('center')
                    testimArr[i].parentElement.classList.add('active')
                }
            }

        });
    });

});


// $(document).ready(function () {

//     let $owl = $('.owl-carousel');

//     $owl.children().each(function (index) {
//         $(this).attr('data-position', index);
//     });

//     $owl.owlCarousel({
//         center: true,
//         loop: true,
//         margin: 5,
//         nav: false,
//         dots: false,
//         autoplay: true,
//         autoplayTimeout: 3000,
//         responsive: {
//             0: {
//                 items: 5
//             },
//             600: {
//                 items: 10
//             },
//             1000: {
//                 items: 21
//             }
//         }
//     });

//     let testim = [{
//             id: 1,
//             name: "Jan Nowak",
//             opinion: "Lorem ipsum"
//         },
//         {
//             id: 2,
//             name: "Kazimierz Kowalski",
//             opinion: "Lorem ipsum dolor set amet"
//         },
//     ]

//     // setInterval(function () {
//     //     let y = $('.owl-carousel .center div img')
//     //     console.log(y.attr("data-clientID") + "z interwału");
//     // }, 3000);


//     $(document).on('click', '.owl-item>div', function () {
//         //center clicked img
//         $owl.trigger('to.owl.carousel', $(this).data('position'));
//         // get img id
//         // let clientID = $(this.children).attr("data-clientID");
//         // console.log(clientID + "z klikniecia")
//         // let x = $('.owl-carousel .center div img')
//         // console.log(x.attr("data-clientID"))
//     });
// });