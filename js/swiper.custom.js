// 新聞公告使用的 swiper 套件設定 - 2023/01/10 - by ossian

var swiper = new Swiper(".news-banner-group", {
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
