links = document.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    $(".active").removeClass("active");
    this.className += " active";
  });
}
