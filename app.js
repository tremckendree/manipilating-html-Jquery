$(document).ready(function () {
  let btn = $("<button id = 'btnSubmit'>click here</button>");
  $("#btnSubmit").attr("disabled", true);
  $("body").append(btn);

  $("#btnSubmit").on("click", function (event) {
    event.preventDefault();
    alert("a nice message");
  });
  let btn2 = $("<button id = 'btn2Submit'>click here</button>");
  $("#btn2Submit").attr("disabled", true);
  $("body").append(btn2);

  $("#btn2Submit").on("click", function (event) {
    event.preventDefault();
    alert("thanks for clicking me");
  });

  let div1 = $("<div>jhgvhgc</div>");
    $("body").append(div1);


});
