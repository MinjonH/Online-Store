$(document).ready(function() {
    //Dropdown menu
    $('.dropdown-menu').hide(); 
    $('#dropdownMenu1').click(function() {
      $(this).next('div').slideToggle('fast')
      .siblings('div:visible').slideUp('fast');
    });
  });