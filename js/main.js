
$(document).ready(function(){
  checkNavbar();
  $(window).scroll(checkNavbar);

  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

function checkNavbar(){
  var scrollTop = $(this).scrollTop()
  if( scrollTop > 20 )
  {
    $('#hero-section').addClass('has-scrolled');
  }else{
    $('#hero-section').removeClass('has-scrolled');
  }
}
