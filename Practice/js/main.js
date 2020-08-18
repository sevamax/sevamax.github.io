        $(document).ready(function () {
            $('.features__slider').slick({
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    prevArrow: '<button class= "arrow prev"></button>',
                    nextArrow: '<button class= "arrow next"></button>',
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    prevArrow: '<button class="prev"></button>',
                    nextArrow: '<button class="next"></button>',
                    slidesToScroll: 1
                  }
                }
              ]    
            });
        });