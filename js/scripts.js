$(document).ready(function() {


    $("button#frogbtn").click(function() {
      $('#frog').show();
      $('#bird').hide();
      $('#albino-gorilla').hide();
    });

    $("button#gorillabtn").click(function() {
      $('#albino-gorilla').show();
      $('#frog').hide();
      $('#bird').hide();
    });

    $("button#mothbtn").click(function() {
      $('#bird').show();
      $('#frog').hide();
      $('#albino-gorilla').hide();

    });





});
