var slideIndex = 0;
carousel2();

function carousel2() {
  var i,
    x = document.getElementsByClassName("slides2");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";

  setTimeout(carousel2, 10000);
}
