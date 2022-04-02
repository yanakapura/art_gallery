const swiperMain = new Swiper(".main__slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 6000,
    },
  
    pagination: {
      el: "#swiper__main-pagination",
      clickable: true,
    },
  
    spaceBetween: 1,
  });
  
  const swiperEvents = new Swiper(".events-owl", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
    },
  
    slidesPerView: 1,
    spaceBetween: 5,

    breakpoints: {
      // when window width is >= 375px
      375: {
        slidesPerView:1,
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      980: {
        slidesPerView: 4,
      }
    }
  });
  
  const swiperTestimonial = new Swiper(".swiper-testimonial", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
  
    slidesPerView: 1,
  });
  
  const swiperTestimonialAbout = new Swiper(".section-testimonial__swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: ".swiper-pagination",
    },
  
    slidesPerView: 1,
  });
  
  const swiperShop = new Swiper(".swiper-shop", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
    },
  
    pagination: {
      el: "#swiper-shop__pagination",
      clickable: true,
    },
  
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 3,

    breakpoints: {
      // when window width is >= 375px
      // 375: {
      //   slidesPerView:1,
      //   slidesPerGroup: 1
      // },
      // when window width is >= 576px
      375: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      // when window width is >= 768px
      630: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      }
    }
  });