$(function() {

  $('a').hover(
    function() {
      $(this).css('color', 'red');
    },
    function() {
      $(this).css('color', 'black'); 
    }
  );

  $('p.click').toggle(
    function() {
      $('dl').slideUp(1000);
    },
    function() {
      $('dl').slideDown(1000);
    }
  );

  $('p.draggable').draggable();
});
