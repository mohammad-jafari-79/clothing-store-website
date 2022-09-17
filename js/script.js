$(document).ready(function () {
  const navHeight = $("header .navbar").height() + 16;
  $("header").css({ height: navHeight });
  function getWidth() {
    var maxwidth = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
    if (maxwidth >= 576) {
      $("#brand").removeClass("justify-content-center");
      $("#brand").addClass("justify-content-end");
      $("#item-bar").removeClass("col");
      $("#item-bar").addClass("col-3");
    }
    if (maxwidth < 576) {
      $("#brand").removeClass("justify-content-end");
      $("#brand").addClass("justify-content-center");
      $("#item-bar").removeClass("col-3");
      $("#item-bar").addClass("col");
    }
    const navHeight = $("header .navbar").height() + 16;
    $("header").css({ height: navHeight });
  }
  window.addEventListener("resize", getWidth);
  $("#item1 > a").click(function () {
    $("#item1 > a").addClass("active-1");
    $("#item2 > a, #item3 > a").removeClass("active-1");
  });
  $("#item2 > a").click(function () {
    $("#item2 > a").addClass("active-1");
    $("#item1 > a, #item3 > a").removeClass("active-1");
  });
  $("#item3 > a").click(function () {
    $("#item3 > a").addClass("active-1");
    $("#item1 > a, #item2 > a").removeClass("active-1");
  });
  $(window).scroll(function () {
    scrollFunction();
  });
  var header = document.getElementsByTagName("header");
  var sticky = header.offsetTop;
  var sticky_box = document.getElementById("sticky_box");
  function scrollFunction() {
    if (window.pageYOffset > sticky) {
      header.addClass("sticky");
    }
    // sticky arrow top
    $(sticky_box).click(function () {
      scrollBack();
    });
    if (document.documentElement.scrollTop > 500) {
      sticky_box.style.display = "block";
    } else {
      sticky_box.style.display = "none";
    }
    function scrollBack() {
      document.documentElement.scrollTop = 0;
    }
  }
  var click_count = 0;
  $("#advance-search").click(function () {
    click_count++;
    if (click_count % 2 == 0) {
      $("#main").css("grid-template", ".3fr / repeat(6, 1fr)");
      $("#filter").css("display", "none");
    } else {
      $("#main").css("grid-template", ".19fr repeat(4, .3fr) / repeat(6, 1fr)");
      $("#filter").css({
        display: "grid",
        "grid-row": "2 / 6",
        "grid-column": "1 / 7",
      });
    }
  });
  var acc = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var panelList = ["panel-one", "panel-two", "panel-three", "panel-four"];
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      $(`#${panel.id}`).css("display", "none");
      $(`#${panel.id}`).css("display", "block");
      panelList = panelList.filter((e) => e !== panel.id);
      for (let index = 0; index < panelList.length; index++) {
        $(`#${panelList[index]}`).css("display", "none");
      }
    });
  }
  $("#profile_icon").click(function () {
    $("#login").css("display", "block");
    $("#myModal").css("display", "block");
  });
  var modal = document.getElementById("myModal");
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  $(".remove").click(function () {
    this.parentElement.remove();
    var costList = document.getElementsByClassName("single_cost");
    var number_of_product_list =
      document.getElementsByClassName("number_of_product");
    var final_cost_list = document.getElementsByClassName("final_cost");
    // main_cost = sum of costs
    var main_cost = 0;
    for (let index = 0; index < costList.length; index++) {
      let cost = costList[index].innerHTML;
      let number_of_product = parseInt(number_of_product_list[index].value);
      final_cost_list[index].innerHTML = cost * number_of_product;
      main_cost += parseInt(final_cost_list[index].innerHTML);
    }
    if (main_cost >= 200000) {
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost;
      $("#free_post").css("color", "#2ecc71");
    } else {
      var post_cost = 10000;
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost + post_cost;
      $("#free_post").css("color", "#e74c3c");
      setTimeout(function () {
        var post_cost_element = document.getElementById("post_cost");
        post_cost_element.innerHTML = `${post_cost} <span> تومان</span>`;
      }, 1500);
    }
  });
  $("button:has(i.bi-caret-down-fill)").click(function () {
    // td = buttonParent
    let buttonParent = this.parentNode;
    let number_of_product = buttonParent.children[1];
    number_of_product_value = parseInt(number_of_product.value);
    if (number_of_product_value == 1) {
      alert("تعداد محصول کمتر از 1 نمیتواند باشد");
    } else {
      number_of_product_value -= 1;
      number_of_product.value = number_of_product_value;
    }
    var costList = document.getElementsByClassName("single_cost");
    var number_of_product_list =
      document.getElementsByClassName("number_of_product");
    var final_cost_list = document.getElementsByClassName("final_cost");
    // main_cost = sum of costs
    var main_cost = 0;
    for (let index = 0; index < costList.length; index++) {
      let cost = costList[index].innerHTML;
      let number_of_product = parseInt(number_of_product_list[index].value);
      final_cost_list[index].innerHTML = cost * number_of_product;
      main_cost += parseInt(final_cost_list[index].innerHTML);
    }
    if (main_cost >= 200000) {
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost;
      $("#free_post").css("color", "#2ecc71");
    } else {
      var post_cost = 10000;
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost + post_cost;
      setTimeout(function () {
        var post_cost_element = document.getElementById("post_cost");
        post_cost_element.innerHTML = `${post_cost} <span> تومان</span>`;
        $("#free_post").css("color", "#e74c3c");
      }, 1500);
    }
  });
  $("button:has(i.bi-caret-up-fill)").click(function () {
    let buttonParent = this.parentNode;
    let number_of_product = buttonParent.children[1];
    number_of_product_value = parseInt(number_of_product.value);
    number_of_product_value += 1;
    number_of_product.value = number_of_product_value;
    var costList = document.getElementsByClassName("single_cost");
    var number_of_product_list =
      document.getElementsByClassName("number_of_product");
    var final_cost_list = document.getElementsByClassName("final_cost");
    // main_cost = sum of costs
    var main_cost = 0;
    for (let index = 0; index < costList.length; index++) {
      let cost = costList[index].innerHTML;
      let number_of_product = parseInt(number_of_product_list[index].value);
      final_cost_list[index].innerHTML = cost * number_of_product;
      main_cost += parseInt(final_cost_list[index].innerHTML);
    }
    if (main_cost >= 200000) {
      setTimeout(function () {
        var post_cost_element = document.getElementById("post_cost");
        post_cost_element.innerHTML = "0";
        $("#free_post").css("color", "#2ecc71");
      }, 1500);
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost;
    } else {
      var post_cost = 10000;
      total_cost_element = document.getElementById("total_cost");
      total_cost_element.innerHTML = main_cost + post_cost;
      $("#free_post").css("color", "#e74c3c");
    }
  });
  var costList = document.getElementsByClassName("single_cost");
  var number_of_product_list =
    document.getElementsByClassName("number_of_product");
  var final_cost_list = document.getElementsByClassName("final_cost");
  // main_cost = sum of costs
  var main_cost = 0;
  for (let index = 0; index < costList.length; index++) {
    let cost = costList[index].innerHTML;
    let number_of_product = parseInt(number_of_product_list[index].value);
    final_cost_list[index].innerHTML = cost * number_of_product;
    main_cost += parseInt(final_cost_list[index].innerHTML);
  }
  if (main_cost >= 200000) {
    setTimeout(function () {
      var post_cost_element = document.getElementById("post_cost");
      post_cost_element.innerHTML = "0";
      $("#free_post").css("color", "#2ecc71");
    }, 1500);
    total_cost_element = document.getElementById("total_cost");
    total_cost_element.innerHTML = main_cost;
  } else {
    var post_cost = 10000;
    total_cost_element = document.getElementById("total_cost");
    if (total_cost_element != null) {
      total_cost_element.innerHTML = main_cost + post_cost;
      $("#free_post").css("color", "#e74c3c");
    }
  }
  $("#colorSelector, #sizeSelector").change(function () {
    $("#add-to-basket > button").prop("disabled", false);
  });
});
