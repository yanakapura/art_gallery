const swiperMain = new Swiper(".main__slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
  
    slidesPerView: 4,
    spaceBetween: 10,
  });
  
  const swiperTestimonial = new Swiper(".swiper-testimonial", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 3,
  });