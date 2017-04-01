$(window).on("load resize", function() {

if($(window).width() > 1000 ) {
  $(".research-project").hover(
    function() { //On Hover
      $(".overlay",this).fadeIn("slow");
      $(".overlay-text",this).slideDown("slow");
    }, function() { //Off Hover
      $(".overlay",this).fadeOut("fast");
      $(".overlay-text",this).fadeOut("fast");
    }
  ); //end Hover
} //end window width If

}); //end jquery
