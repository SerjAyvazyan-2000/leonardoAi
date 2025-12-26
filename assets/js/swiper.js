const bWorkSwiper = new Swiper(".r-models-swiper", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop:true,

  navigation: {
    nextEl: ".r-models-next",
    prevEl: ".r-models-prev",
  },

  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    500: { slidesPerView: 1.5 , spaceBetween: 10},
    626: { slidesPerView: 2.6 },
     700: { slidesPerView: 3 },
    830: { slidesPerView: 3.2 },
    1000: { slidesPerView: 3.7 },
    1200: { slidesPerView: 4 },
  },
});


const RGalarySwiper = new Swiper(".r-galary-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  autoHeight:true,

  navigation: {
    nextEl: ".r-galary-next",
    prevEl: ".r-galary-prev",
  },


});






const abilitiesTabsSwiper = new Swiper(".r-abilities-tab-swiper", {
  slidesPerView: 3.2,
  spaceBetween: 10,
  centeredSlides: true,
  initialSlide: 0,

  breakpoints: {
    320: { slidesPerView: 2 },
    370: { slidesPerView: 2.4 },
    576: { slidesPerView: 2.2 },
    600: { slidesPerView: 2.2 },
    700: { slidesPerView: 2.6 },
    830: { slidesPerView: 3.2 },
  },
});

const tabButtons = document.querySelectorAll(".r-abilities-tab-btn");
const abilityItems = document.querySelectorAll(".r-abilities-item");

function activateAbility(id) {
  tabButtons.forEach((btn, index) => {
    const isActive = btn.dataset.id === id;
    btn.classList.toggle("active", isActive);

    if (isActive) {
      abilitiesTabsSwiper.slideTo(index, 400);
    }
  });

  abilityItems.forEach(item => {
    item.classList.toggle("active", item.dataset.id === id);
  });
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    activateAbility(btn.dataset.id);
  });
});

activateAbility("2");