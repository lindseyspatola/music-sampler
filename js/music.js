$(document).ready(function() {


  function hideAll() {
    $('#beat').hide();
    $('#she').hide();
    $('#when').hide();
    $('#fear').hide();
    $('#review').hide();
  }

  $('#concertPhoto').click(function() {
   $('#review').slideToggle();
});


hideAll();


  $('.albumCovers').click(function() {


    hideAll();


    switch ($(this).attr("id")) {
      case "morningCover":
        $('#beat').show();
        break;
      case "somethingCover":
        $('#she').show();
        break;
      case "walkingCover":
        $('#when').show();
        break;
      case "brandCover":
        $('#fear').show();
        break;
    }


    $("audio").each(function() {
      this.pause();
      this.currentTime = 0;

  });
 });

  });
