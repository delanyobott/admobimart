function showPassword() {
  var x = document.getElementById("password");
  var y = document.getElementById("show-password");

  if (x.type === "password") {
    x.type = "text";
    y.innerHTML = "Hide Password";
    y.style.backgroundColor = "maroon";
    y.style.color = "goldenrod";
  } else {
    x.type = "password";
    y.innerHTML = "Show Password";
    y.style.backgroundColor = "#4caf50";
    y.style.color = "#fff";
  }
}
