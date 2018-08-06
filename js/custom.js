$(document).ready(function() {

  $('#hover-cap-3col .thumbnail').hover(

    function() {
      $(this).find('.caption').fadeIn(250);
    },

    function() {
      $(this).find('.caption').fadeOut(250);
    }
  );

});
