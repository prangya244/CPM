$(document).ready(() => {
  $('#showContent').on('click', () => {
    $('#content').show();
  });

  $('#hideContent').on('click', () => {
    $('#content').hide();
  });

  $('#toggleContent').on('click', () => {
    $('#content').toggle();
  });

  $('#fadeOutContent').on('click', () => {
    $('#content').fadeOut(1000);
  });

  $('#fadeInContent').on('click', () => {
    $('#content').fadeIn('slow');
  });

  $('#fadeToggleContent').on('click', () => {
    $('#content').fadeToggle(1000);
  });

  $('#slideUpContent').on('click', () => {
    $('#content').slideUp(1000);
  });

  $('#slideDownContent').on('click', () => {
    $('#content').slideDown(1000);
  });

  $('#slideToggleContent').on('click', () => {
    $('#content').slideToggle('slow');
  });
});