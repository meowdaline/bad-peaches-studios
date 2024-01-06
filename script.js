let images = [
    'Assets/gallery/1.jpg',
    'Assets/gallery/2.jpg',
    'Assets/gallery/3.jpg',
    'Assets/gallery/4.jpg',
    'Assets/gallery/5.jpg',
    'Assets/gallery/6.jpg',
    'Assets/gallery/7.jpg',
    'Assets/gallery/8.jpg',
    'Assets/gallery/9.jpg',
];


let slideIndex = 1;


function nextPage() {


    $('.gallery-image').fadeOut();

    setTimeout(
        () => {


            if (slideIndex === 1) {
                //page 2
                $('#Image1').attr('src', images[3]);
                $('#Image2').attr('src', images[4]);
                $('#Image3').attr('src', images[5]);
                $('#numbertext').text('2 / 3');

                slideIndex += 1;


            } else if (slideIndex === 2) {
                //page 3

                $('#Image1').attr('src', images[6]);
                $('#Image2').attr('src', images[7]);
                $('#Image3').attr('src', images[8]);
                $('#numbertext').text('3 / 3');

                slideIndex += 1;

            } else if (slideIndex === 3) {
                //page 1

                slideIndex = 1;

                $('#Image1').attr('src', images[0]);
                $('#Image2').attr('src', images[1]);
                $('#Image3').attr('src', images[2]);
                $('#numbertext').text('1 / 3');
            }

            $('.gallery-image').fadeIn();

        },

        400
    );

}

function previousPage() {

    $('.gallery-image').fadeOut();

    setTimeout(
        () => {
            // page 3
            if (slideIndex === 1) {

                $('#Image1').attr('src', images[6]);
                $('#Image2').attr('src', images[7]);
                $('#Image3').attr('src', images[8]);
                $('#numbertext').text('3 / 3');


                slideIndex += 1;

            } else if (slideIndex === 2) {
                $('#Image1').attr('src', images[3]);
                $('#Image2').attr('src', images[4]);
                $('#Image3').attr('src', images[5]);
                $('#numbertext').text('2 / 3');


                slideIndex += 1;

            } else if (slideIndex === 3) {

                $('#Image1').attr('src', images[0]);
                $('#Image2').attr('src', images[1]);
                $('#Image3').attr('src', images[2]);
                $('#numbertext').text('1 / 3');


                slideIndex = 1;
            }

            $('.gallery-image').fadeIn();

        },

        400
    );

}















function nextPageMobile() {



    if (slideIndex === 1) {
        //page 2
        $('#Image1').attr('src', images[1]);
        $('#numbertext').text('2 / 9');

        slideIndex += 1;


    } else if (slideIndex === 2) {
        //page 3

        $('#Image1').attr('src', images[2]);
        $('#numbertext').text('3 / 9');

        slideIndex += 1;

    } else if (slideIndex === 3) {
        //page 4

        $('#Image1').attr('src', images[3]);
        $('#numbertext').text('4 / 9');

        slideIndex += 1;

    } else if (slideIndex === 4) {
        //page 5

        $('#Image1').attr('src', images[4]);
        $('#numbertext').text('5 / 9');

        slideIndex += 1;

    } else if (slideIndex === 5) {
        //page 6

        $('#Image1').attr('src', images[5]);
        $('#numbertext').text('6 / 9');

        slideIndex += 1;
    } else if (slideIndex === 6) {
        //page 7

        $('#Image1').attr('src', images[6]);
        $('#numbertext').text('7 / 9');

        slideIndex += 1;
    } else if (slideIndex === 7) {
        //page 8

        $('#Image1').attr('src', images[7]);
        $('#numbertext').text('8 / 9');

        slideIndex += 1;
    } else if (slideIndex === 8) {
        //page 9

        $('#Image1').attr('src', images[8]);
        $('#numbertext').text('9 / 9');

        slideIndex += 1;
    } else if (slideIndex === 9) {
        //page 1

        slideIndex = 1;

        $('#Image1').attr('src', images[0]);
        $('#numbertext').text('1 / 9');
    }
}
