


$(document).ready(function(){
  
    var menu = document.querySelector('.sidebar');
    var origOffsetY = menu.offsetTop;
    stickyDiv = "stuck";
    function scroll () {
      if ($(window).scrollTop() >= origOffsetY) {
        $('.sidebar').addClass(stickyDiv);
      } else {
        $('.sidebar').removeClass(stickyDiv);
      }  
      
    }
    
    document.onscroll = scroll;
    
      /*
      Thanks to http://stackoverflow.com/a/18607111
      */
      $('section h1, section h2, section h3').each(function () {
        $(this).html($(this).html().replace(/(\.)/g, '<span class="highlight">$1</span>'));
    });
      
    });