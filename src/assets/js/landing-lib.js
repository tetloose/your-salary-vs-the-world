const landingOptions = {
//   carousel() {
//       var $slickElement = $('#carousel');
//       $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//           if (currentSlide == 0) {
//               $('.arrow-prev').removeClass('active');
//               $('.arrow-next').addClass('active');
//
//           } else if (currentSlide == 1) {
//               $('.arrow-prev').addClass('active');
//               $('.arrow-next').removeClass('active');
//
//           } else {
//               $('.arrow-next').addClass('active');
//
//           }
//
//       });
//       $slickElement.slick({
//           infinite: true,
//           adaptiveHeight: false,
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           appendArrows: '#carousel-holder',
//           prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//           nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//           responsive: [
//               {
//                   breakpoint: 1028,
//                   settings: {
//                       slidesToShow: 3,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows',
//                   }
//               },
//               {
//                   breakpoint: 769,
//                   settings: {
//                       slidesToShow: 2,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               },
//               {
//                   breakpoint: 445,
//                   settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               }
//           ]
//       }).on('setPosition', function (event, slick) {
//         slick.$slides.css('height', slick.$slideTrack.height() + 'px');
//     });
// ;
//
//       var $slickElement_2 = $('#carousel-2');
//       $slickElement_2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//           if (currentSlide == 0) {
//               $('.arrow-prev').removeClass('active');
//               $('.arrow-next').addClass('active');
//
//           } else if (currentSlide == 1) {
//               $('.arrow-prev').addClass('active');
//               $('.arrow-next').removeClass('active');
//
//           } else {
//               $('.arrow-next').addClass('active');
//
//           }
//       });
//       $slickElement_2.slick({
//           infinite: true,
//           adaptiveHeight: true,
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           appendArrows: '#carousel-holder-2',
//           prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//           nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//           responsive: [
//               {
//                   breakpoint: 1028,
//                   settings: {
//                       slidesToShow: 3,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-2',
//                   }
//               },
//               {
//                   breakpoint: 769,
//                   settings: {
//                       slidesToShow: 2,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-2',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               },
//               {
//                   breakpoint: 445,
//                   settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-2',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               }
//           ]
//       }).on('setPosition', function (event, slick) {
//         slick.$slides.css('height', slick.$slideTrack.height() + 'px');
//     });;
//
//       var $slickElement_3 = $('#carousel-3');
//       $slickElement_3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//           if (currentSlide == 0) {
//               $('.arrow-prev').removeClass('active');
//               $('.arrow-next').addClass('active');
//
//           } else if (currentSlide == 1) {
//               $('.arrow-prev').addClass('active');
//               $('.arrow-next').removeClass('active');
//
//           } else {
//               $('.arrow-next').addClass('active');
//
//           }
//       });
//       $slickElement_3.slick({
//           infinite: true,
//           adaptiveHeight: true,
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           appendArrows: '#carousel-holder-3',
//           prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//           nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//           responsive: [
//               {
//                   breakpoint: 1028,
//                   settings: {
//                       slidesToShow: 3,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-3',
//                   }
//               },
//               {
//                   breakpoint: 769,
//                   settings: {
//                       slidesToShow: 3,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-3',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               },
//               {
//                   breakpoint: 445,
//                   settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       appendArrows: '#carousel-arrows-3',
//                       prevArrow: '<button class="btn btn-primary arrow-prev"><i class="fas fa-chevron-left"></i></button> ',
//                       nextArrow: '<button class="btn btn-primary arrow-next"><i class="fas fa-chevron-right"></i></button>',
//                   }
//               }
//           ]
//       });
//   },
//   tooltip() {
//       $("body").tooltip({selector: '[data-toggle=tooltip]'});
//   },
//   headerHamburgerCollapse() {
//       $('body').on('click', '.section-link, [data-anchor]', function (e) {
//           jQuery('.navbar-collapse').collapse('hide');
//       });
//   },
  scrollHint() {
      new ScrollHint('.js-scrollable', {

      });
  },
  scrollToSections() {
      function sectionsMedia() {
          if ($(window).width() < 992) {
              offset = 375;
          } else if ($(window).width() < 1200) {
              offset = 80;
          } else offset = 100;


          $('html,body').animate({scrollTop: $('#' + section).offset().top - offset}, 'slow');
      }

      $('[data-anchor]').on('click', function (e) {
          e.preventDefault();
          anchor = $(this).data('anchor');
          $('[data-anchor],[data-section]').removeClass('open active');
          $(this).addClass('active');
          $('html,body').animate({scrollTop: $('#' + anchor).offset().top - 0}, 'slow');
      });
      $('[data-section-primary]').on('click', function (e) {
          e.preventDefault();
          section = $(this).data('section-primary');
          $('.section_primary, [data-section-primary]').removeClass('open active');
          $('#' + section).addClass('open');
          $(this).addClass('active ');
          sectionsMedia(section);

      });
      $('[data-section-secondary]').on('click', function (e) {
          e.preventDefault();
          section = $(this).data('section-secondary');
          $('.section_secondary, [data-section-secondary]').removeClass('open active');
          $('#' + section).addClass('open');
          $(this).addClass('active ');
          sectionsMedia(section);

      });
      $('[data-section-third]').on('click', function (e) {
          e.preventDefault();
          section = $(this).data('section-third');
          $('.section_third, [data-section-third]').removeClass('open active');
          $('#' + section).addClass('open');
          $(this).addClass('active ');
          sectionsMedia(section);

      });
      $('[data-section]').on('click', function (e) {
          e.preventDefault();
          section = $(this).data('section');
          $('.section_primary, [data-anchor], [data-section]').removeClass('open active');
          $('#' + section).addClass('open');
          $(this).addClass('active ');
          sectionsMedia(section);


      });
  },
  currency() {
      var symbol = '£';
      var rate = 1;
      var currency = 'GBP'
      $('.change-currency').on('click update', function (e) {
          e.preventDefault();
          $('.change-currency').removeClass('active');
          $(this).addClass('active');
          symbol = $(this).data('symbol');
          currency = $(this).data('currency');
          rate = $(this).data('rate');
          $('[data-amount]').each(function (i, el) {
              amount = $(this).data('amount');
              if (amount == 'Free') $(el).html('Free');
              else if (amount == 'N/A') $(el).html('N/A*');
              else {

                  if (amount > 100) toFixed = 0;
                  else toFixed = 2;

                  amount = parseFloat(amount * rate).toFixed(toFixed);
                  amount = numberWithCommas(amount);
                  string = symbol + amount;
                  $(el).html(string);
              }
          });
          if (symbol == '$') {
              $('[data-symbol="$"]').addClass('active');

          } else if (symbol == '€') {
              $('[data-symbol="€"]').addClass('active');

          } else if (symbol == '£') {
              $('[data-symbol="£"]').addClass('active');

          }

      });
  },

    controlLenght() {
        $('.control_lenght').on('click', function (e) {
            e.preventDefault();
            get_table_id = $(this).closest('.table-block').find('table').attr('id');
            table_instance = $('#' + get_table_id).DataTable();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).html('Show more +');
                table_instance.page.len(10).draw();
                $('html,body').animate({ scrollTop: $('#' + get_table_id).offset().top - 100 }, 'slow');
            } else {
                $(this).addClass('active');
                $(this).html('Show less -');
                table_instance.page.len(-1).draw();
            }

        });
    },
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertToSlugUppercase(Text) {
  return Text
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      ;
}

function convertToSlug(Text) {
  return Text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-')
      ;
}

function abbreviateNumber(number) {

  if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'bn';
  }
  if (number >= 1000000) {
      return (number / 1000000).toFixed(0).replace(/\.$/, '') + 'm';
  }

  if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  if (number <= -1000000000) {
      return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }

  if (number <= -1000000) {
      return (number / 1000000).toFixed(0).replace(/\.0$/, '') + 'm';
  }

  if (number <= -1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  return number;
}