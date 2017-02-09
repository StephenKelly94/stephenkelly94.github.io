window.onscroll = function(){
  var windowHeight = document.documentElement.clientHeight - 70
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    document.getElementById("hero-section").className = "site-nav nav-out-of-hero";
  }else{
    document.getElementById("hero-section").className = "site-nav";
  }
};
