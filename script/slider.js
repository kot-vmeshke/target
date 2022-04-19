$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '120px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 586,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }
    ]
  });
});