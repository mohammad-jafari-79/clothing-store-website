$(document).ready(function () {
  $("#login").submit(function (event) {
    var formData = {
      email: $("#email").val(),
      pass: $("#password").val(),
      sub: $("#loginsubmit").val(),
    };

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
      if (data == "1") {
        $("#login").html($("#email").val() + "خوش آمدید.");
      } else {
        $("#login").html("خطا در ورود.");
      }
    });

    event.preventDefault();
  });

  $.ajax({
    type: "GET",
    url: "process.php?islogin=1",
  }).done(function (data) {
    console.log(data);
    if (data == "0") {
      // nothing just waiting to login...
    } else {
      $("#login").html(data + " خوش آمدید.");
    }
  });
});
