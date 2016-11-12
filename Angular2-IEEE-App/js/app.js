$(function () {
       
      var menuTrigger = $(".nav-user > span");
      var container = $(".menu");

      menuTrigger.on('click', function () {
            $('.menu').toggleClass('hide-menu');

      });

      $(document).click(function (e) {
            if (!container.is(e.target) && !menuTrigger.is(e.target)
                  && menuTrigger.has(e.target).length === 0) {
                  $('.menu').addClass('hide-menu');
            }
      });

      $('.nav-collapse').on('click', function () {

            $('.nav-links').toggleClass('collapse');

      });


//modal 
      var modal = $('#modal');
      var closeButton = $('.close-button');
      var subscribeButton = $('#subscribe');
      var container = $('.container');

      subscribeButton.click(function(){
            console.log('pepe');
      });

      subscribeButton.on('click', function () {
            modal.removeClass('modal-close');
            modal.addClass('modal-open');
            container.addClass('modal-blur');            
            setTimeout(function () {
                  $('.modal-content').addClass('modal-effects');
            }, 100);
      });

      closeButton.on('click', function () {
            $('.modal-content').removeClass('modal-effects');
            setTimeout(function () {
                  modal.removeClass('modal-open');
                  modal.addClass('modal-close');
                   container.removeClass('modal-blur'); 
            }, 450);

      });

      modal.on('click', function (e) {
            if (e.target === this) {
                  $('.modal-content').removeClass('modal-effects');
            setTimeout(function () {
                  modal.removeClass('modal-open');
                  modal.addClass('modal-close');
                  container.removeClass('modal-blur');
            }, 450);    
          }
      });


      ///form animation

      var formControl = $('.animate-form-control');
      var labels = $('.label').toArray();
      var inputs = $('.input');
      var values = $(".input");
     
      values.map(function (index) {
            return $(this).focus(function () {                 
                  $(labels[index]).css('top', '-0.5rem');
                  $(labels[index]).css('font-size', '0.8rem');
            });
      });

       values.map(function (index) {
            return $(this).focusout(function () {
                  if( $(this).val() === ''){                  
                  $(labels[index]).css('top', '17px');
                  $(labels[index]).css('font-size', '1rem');
                  }
            });
      });
});