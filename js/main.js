$(document).ready(function() {
  $('html').attr('id', 'pg-top');
  
  // $.validate({
  //   form: '#contactForm',
  //   modules: 'html5'
  // });
  
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

    //var self = $(this);

    //var href = self.attr('href');
    //console.log(href);
    $("body, html").animate({
      //scrollTop: $(href).offset().top+1
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);    
    
  });

});