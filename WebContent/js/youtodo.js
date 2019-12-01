//hamburger button
$(function() {
    $('.menu-toggle').on('click', function() {
      $(this).toggleClass('active');
    });
  });

//sidebar menu button
$('#menu').click(function() {
  $('.ui.sidebar').sidebar('toggle');
});
