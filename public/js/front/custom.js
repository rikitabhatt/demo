/* light gallery js for photo gallery page  */
$(document).ready(function () {
  $(".lightgallery").lightGallery();
});

/**************** poducts  detail slider  *****************/
$(document).ready(function () {
  $(".slider-content").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    speed: 1000,
    asNavFor: ".slider-thumb",
    arrows: true,
    prevArrow: '<span class="ti-angle-left slick-prev"></span>',
    nextArrow: '<span class="ti-angle-right slick-next"></span>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-thumb").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-content",
    dots: false,
    centerMode: true,
    centerPadding: "0",
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});

/**************** Realted Product Slider  *****************/
$(document).ready(function () {
  $(".related-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
/**************** search btn  *****************/
$(document).ready(function () {
  $(".search .search__btn").click(function () {
    $(".search").addClass("search--visible");
  });
  $(document).on("click", function (e) {
    if ($(e.target).closest(".search").length === 0) {
      $(".search").removeClass("search--visible");
    }
  });
});

/**************** menu  *****************/

$(document).ready(function () {
  ma5menu({
    menu: ".site-menu",
    activeClass: "active",
    footer: "#ma5menu-tools",
    position: "left",
    closeOnBodyClick: true,
  });
});

/**************** fixed menu js  *****************/

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".header-wrapper").addClass("fixed-header");
  } else {
    $(".header-wrapper").removeClass("fixed-header");
  }
});
