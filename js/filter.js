var objclone;
$(document).ready(function () {
  objclone = $("#offer-main").html();

  loadproducts();
  $("input[type=checkbox]").click(function () {
    loadproducts();
  });
  $("input[type=radio]").click(function () {
    loadproducts();
  });
});

function loadproducts() {
  $("#offer-main").html(objclone);
  $("[id^=offer-]").each(function () {
    if ($(this).attr("id") != "offer-main") {
      $(this).hide();
    }
  });

  var qstring = "";
  $("input[type=checkbox]").each(function () {
    if ($(this).attr("id")) {
      qstring +=
        "&" + $(this).attr("id") + "=" + ($(this).prop("checked") ? "1" : 0);
    }
  });
  $("input[type=radio]").each(function () {
    if ($(this).attr("id")) {
      qstring +=
        "&" + $(this).attr("id") + "=" + ($(this).prop("checked") ? "1" : 0);
    }
  });

  $.ajax({
    type: "GET",
    url: "process.php?filter=1" + qstring,
  }).done(function (data) {
    const dataobj = JSON.parse(data);
    for (i = 0; i < dataobj.length; i++) {
      id = i + 1;
      var replaced = $("#offer-" + id)
        .html()
        .replace("زیرپوش نخی", dataobj[i].name);
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace("72,000", dataobj[i].price);
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace("80,000", parseInt(dataobj[i].price) + 20000);
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace("کیان", dataobj[i].brand);
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace(
          "./img/446584_main_1.webp",
          "./products/" + dataobj[i].id + "/1.webp"
        );
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace(
          "./img/446584_main_2.webp",
          "./products/" + dataobj[i].id + "/2.webp"
        );
      $("#offer-" + id).html(replaced);

      replaced = $("#offer-" + id)
        .html()
        .replace(
          "./img/446584_main_3.webp",
          "./products/" + dataobj[i].id + "/3.webp"
        );
      $("#offer-" + id).html(replaced);

      $("#offer-" + id).show();
    }
  });
}
