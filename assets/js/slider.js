
// $( document ).ready(function() {
//     //     console.log( "ready!" );
//         $('.main_slider').slick({
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoplaySpeed: 2000,
//             infinite: true,
//             arrows:true
    
          
//           });
//           $('.slider-for-product').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             arrows: true,
//             autoplay: false,
//             autoplaySpeed: 2000,
//             speed: 300,
//             centerPadding: '20px',
            
//             prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
//             nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
//             infinite:true,
//             fade: true,
//             dots:false,
//             // asNavFor: '.slider-nav',
//             responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   infinite: true,
//                    dots: false,
//                 }
//               },
//               {
//                 breakpoint: 600,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2
//                 }
//               },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               },
//               {
//                 breakpoint: 375,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               },
//               {
//                 breakpoint: 560,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 2
//                 }
//               }
//               // You can unslick at a given breakpoint now by adding:
//               // settings: "unslick"
//               // instead of a settings object
//             ]
//           });
//           $('.slider-nav-product').slick({
//             slidesToShow: 5,
//             slidesToScroll: 1,
//             arrows: true,
//             autoplay: false,
//             autoplaySpeed: 2000,
//             speed: 300,
//             centerPadding: '20px',
//             prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-arrow-left"></i></button>',
//             nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>',
//             infinite:true,
           
//             dots: false,
//             centerMode: true,
//             focusOnSelect: true,
//             responsive: [
//               {
//                 breakpoint: 1024,
//                 settings: {
//                   slidesToShow: 3,
//                   slidesToScroll: 3,
//                   infinite: true,
//                   dots: false
//                 }
//               },
//               // {
//               //   breakpoint: 560,
//               //   settings: {
//               //     slidesToShow: 1,
//               //     slidesToScroll: 2
//               //   }
//               // },
//               {
//                 breakpoint: 480,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               },
//                {
//                 breakpoint: 375,
//                 settings: {
//                   slidesToShow: 1,
//                   slidesToScroll: 1
//                 }
//               },
//               {
//                 breakpoint: 560,
//                 settings: {
//                   slidesToShow: 2,
//                   slidesToScroll: 1
//                 }
//               }
//               // You can unslick at a given breakpoint now by adding:
//               // settings: "unslick"
//               // instead of a settings object
//             ]
//           });
// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav'
//   });
//   $('.slider-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
//$( document ).ready(function() {
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    //   });
    //   $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    //   });
    //})
          
//$( document ).ready(function() {
   




          
          //slick slider with center mode
          $('.center-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: true,
            dots: false,
            speed: 300,
            centerPadding: '20px',
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              // {
              //   breakpoint: 560,
              //   settings: {
              //     slidesToShow: 1,
              //     slidesToScroll: 2
              //   }
              // },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
               {
                breakpoint: 375,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 560,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
          
    //});


          // $('.center-slider').slick({
          //   slidesToShow: 3,
          //   slidesToScroll: 3,
          //   centerMode: true,
          //   arrows: false,
          //   fade:true,
          //   dots: true,
          //   speed: 300,
          //   centerPadding: '20px',
          //   infinite: true,
          //   autoplaySpeed: 3000,
          //   autoplay: true,
          //   responsive: [
          //     {
          //       breakpoint: 1024,
          //       settings: {
          //         slidesToShow: 3,
          //         slidesToScroll: 3,
          //         infinite: true,
          //         dots: true
          //       }
          //     },
              
          //     {
          //       breakpoint: 480,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     },
          //      {
          //       breakpoint: 375,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 2
          //       }
          //     },
          //     {
          //       breakpoint: 560,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 1
          //       }
          //     }
          //     // You can unslick at a given breakpoint now by adding:
          //     // settings: "unslick"
          //     // instead of a settings object
          //   ]
          // });
          
    //});
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
           {
            breakpoint: 375,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });






    
   
//       $('.slider-nav-product').slick({
       

//         infinite:true,
// autoplay:true,
// autoplaySpeed:4000,

//         slidesToShow: 3,
//         slidesToScroll: 1,
//         //asNavFor: '.slider-for-product',
//         dots: true,
//         focusOnSelect: true
        
        
//       });
    