let sectionSwiper = null;
let screenWidth = window.matchMedia('(max-width: 767px)');

let sectionExpandBtn = document.querySelector('#section-expander');
let sectionWrapper = document.querySelector('#section-wrapper');

sectionExpandBtn.addEventListener('click', function () {
  if (sectionExpandBtn.textContent === 'Свернуть') {
    sectionExpandBtn.textContent = 'Показать все';
  } else {
    sectionExpandBtn.textContent = 'Свернуть';
  }
  sectionExpandBtn.classList.toggle('btn-read-more--active');
  sectionWrapper.classList.toggle('section__list--expanded');
});

//Swiper Init
const serviesSwiperInit = function () {
  if (!sectionSwiper) {
    sectionSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      spaceBetween: 16,
      slidesPerView: 'auto',
      mousewheel: true,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        speed: 100,
      },
    });
  }
};

//Swiper Destroy
const sectionSwiperDestroy = function () {
  if (sectionSwiper) {
    sectionSwiper.destroy();
    sectionSwiper = null;
  }
};

let mySwiper = function () {
  if (screenWidth.matches === true) {
    serviesSwiperInit();
  } else {
    sectionSwiperDestroy();
  }
};

screenWidth.addListener(mySwiper);

mySwiper();
