$(document).ready(function() {

  $(".btn btn-success").click(function() {
    var animal = $("input:radio[name=animal]:checked").val();

      if (animal === "frog") {
        $("#frog").show();
        $("#albino-gorilla").hide();
        $("#bird").hide();
      }

      else if (animal === "albino-gorilla") {
        $("#albino-gorilla").show();
        $("#frog").hide();
        $("#bird").hide();
      }

      else (animal === "bird") {
        $("#bird").show();
        $("#albino-gorilla").hide();
        $("#frog").hide();
      }

  });
});
