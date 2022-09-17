$(document).ready(function () {
  $("#signup_form").submit(function (event) {
    var formData = {
      name: $("#f_name").val(),
      lname: $("#l_name").val(),
      email: $("#emailreg").val(),
      pass1: $("#password1").val(),
      pass2: $("#password2").val(),
      mob: $("#mobile").val(),
      sub: $("#submit").val(),
      address1: $("#address1").val(),
      address2: $("#address2").val(),
    };

    $.ajax({
      type: "POST",
      url: "process.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
      $("#signup_form").hide();
      if (data == "1") {
        $("#resultreg").html("<center>ثبت نام با موفقیت انجام شد.</center>");
      } else {
        $("#resultreg").html("<center>خطا در ثبت نام.</center>");
      }
    });

    event.preventDefault();
  });
});
