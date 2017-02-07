$(document).ready(function() {
  $('html').attr('id', 'pg-top');
  
  $.validate({
    form: '#contactForm',
    modules: 'html5'
  });
  
  $.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  function validate() {
    var str = $("#contactForm").serialize();
  }

  $("#contactForm").on('submit', function(event) {
    console.log(JSON.stringify($('form').serializeObject()));
  });
  $("#cancel").on('click', function(event) {
    $("#contactForm")[0].reset();
  });
  
  
  $(".navbar-brand, .nav-link").on("click", function(event) {
    event.preventDefault();

    var self = $(this);

    var href = self.attr('href');
    //console.log(href);
    $("body, html").animate({
      scrollTop: $(href).offset().top+1
    }, 600);    
    
  });

  $(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var one_top = $('#portfolio').position().top;
    var two_top = $('#about').position().top;
    var three_top = $('#contact').offset().top;
    var nav_link = $(".nav-link");

    if (nav_link.closest('li').hasClass("active")) {
      $(".nav-link").closest('li').removeClass('active');
    }

    if (scroll_top > one_top && scroll_top < two_top) {
      $(".nav-link:eq(0)").closest('li').addClass('active');
    } else if (scroll_top > two_top && scroll_top < three_top) {
      $(".nav-link:eq(1)").closest('li').addClass('active');
    } else if (scroll_top > three_top) {
      $(".nav-link:eq(2)").closest('li').addClass('active');
    }
  });
});