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