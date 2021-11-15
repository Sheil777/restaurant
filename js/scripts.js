$(document).ready(
    function(){
        $('.header__burger').click(
          function (event) {
              $('div.header__burger').toggleClass('header__burger_close');
              $('nav.header__menu').toggleClass('header__menu_phone');
          }
        );
    }
);

new Swiper('.our-menu__slider',{
    breakpoints: {
        1000: {
            slidesPerView: 3, // Количество выводимых слайдов
            spaceBetween: 40, // Отступы между слайдами
        },
        850: {
            slidesPerView: 2, // Количество выводимых слайдов
            spaceBetween: 80, // Отступы между слайдами
        },
        700: {
            slidesPerView: 2, // Количество выводимых слайдов
            spaceBetween: 50, // Отступы между слайдами
        }
    },

    spaceBetween: 40, // Отступы между слайдами

    // Автопрокрутка
    autoplay: {
        // Пауза между автопрокруткой
        delay: 5000,
        // Закончить на последнем слайде
        stopOnLastSlide: false,
        // Отключить после ручного переключения
        disableOnInteraction: true
    },

    // Скорость прокрутки
    speed: 600,
});


new Swiper('.testimonial__slider',{
    pagination: {
        el: '.testimonial__pagination',
        clickable: true,
    },
    
    spaceBetween: 60, // Отступы между слайдами
});