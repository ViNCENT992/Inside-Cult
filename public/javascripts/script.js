$(document).ready(function(){

$.get({
  url: "https://api.themoviedb.org/3/movie/now_playing?api_key=f3f3845c16dfc538348a2d0fd2d0e728&language=it",
  success: function(result) {
    var stringResult = "";

    $.each(result.results, function (i) {
      var currentText = result.results[i].overview.substr(0,220);
      if (currentText.length == 0) {
        currentText = "Descrizione non disponibile"
      }else if(currentText.length >= 1){
        currentText = result.results[i].overview.substr(0,220);
      }

    stringResult = " <div class=\"flip-container\" ontouchstart=\"this.classList.toggle('hover');\">";
    stringResult += "<div class=\"flipper\">";
    stringResult += "<div class=\"front\">";
    stringResult += "<img src=\"https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"\" />";
    stringResult += "<div class=\"overlay\">";
    stringResult += "<h2>"+result.results[i].title+"</h2>";
    stringResult += "</div></div> <div class=\"back\">";
    stringResult += "<h2>"+result.results[i].title+"</h2>";
    stringResult += "<span class=\"details\">"+result.results[i].release_date+"</span>";
    stringResult += "<p>"+currentText+" ...</p>";
    stringResult += "<a href=\"dettagli.html?id="+result.results[i].id+"\">Vai alla scheda &gt;</a>";
    stringResult += "</div></div></div>";

    $(".mainSlider").append(stringResult);

    });



  $(".mainSlider").owlCarousel({
    autoPlay: 3000,
    items: 4,
    itemsTablet: [700,3],
    itemsMobile: [500,1],
    loop: true,
    responsive: true,
  });
  }
});



 var options = {
   url: function(query){
     return "https://api.themoviedb.org/3/search/movie?api_key=f3f3845c16dfc538348a2d0fd2d0e728&language=it&query=" +query;
   },
   listLocation: "results",

   getValue: "title",

   list: {
     match:{
       enabled:true,
     }
   },

 };
 $("#bar_search").easyAutocomplete(options);



  $("#icon").click(function(){

    if($('.icon').hasClass('fa-search'))
    {
      $('.icon').addClass('fa-close');
      $('.icon').removeClass('fa-search');
      $('#bar_search').removeClass('disabled');
      $('#bar_search').addClass('active');
    }
    else if($('.icon').hasClass('fa-close'))
        {
            $('.icon').removeClass('fa-close');
            $('.icon').addClass('fa-search');
            $('#bar_search').addClass('disabled');
        }
  });

// ==== Navbar Responsive ====
 $("#responsiveNav").hide();

// ==== Animazione icona Hamburger ====
  $("#hamburger").click(function(){
    $(this).toggleClass("change");
    $("#responsiveNav").toggle();
  });

// ==== Apertura e chiusura Form ====
  $(".accedi").click(function(){
    $("#Id01").css("display","block");
  });

  $("i").click(function(){
    $("#Id01").css("display","none");
  });

});
