$(function(){
  $("#icon-search").on("click", function(){
    $(this).css("display", "none");
    $("#icon-times").css("display", "block");
  })
  $("#icon-times").on("click", function(){
    $(this).css("display", "none");
    $("#icon-search").css("display", "block");
  })

  $("#search-btn").on("click", function(){
    $("form").toggleClass("form-hide");
  })

  $(".filter-button").click(function(){
    let value = $(this).attr('data-filter');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
    })

  if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
  }
  $(this).addClass("active");

  $('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    }, 
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },  
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  
  $('.slider-blog').slick({
    infinite: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, 
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  $(".menui-navi li button").on("click", function(){
    $(".menui-navi li button").removeClass("activeBtn");
    $(this).addClass("activeBtn");
    $(".menui-navi li button").css("color", "#fff");
    $(".activeBtn").css("color", "#a8741a");
  });


$('.up').click(function(){
  let count = parseInt($('#count').val());
  $('#count').val(count+1)
})

  $('.down').click(function(){
    let count = parseInt($('#count').val());
    if(count > 0){
    $('#count').val(count-1)
  }
  })

  $('.items').slick({
    infinite: true,
    slidesToShow: 4,
    autoplay:true,
    slidesToScroll: 1,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    }, 
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });
 
  $(".modal-slider-item").on("click", function(){
    let attr = $(this).attr("src");
    let main = $("#modal-slider-main");
    main.attr("src", `${attr}`);
  })

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });



  
})
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


