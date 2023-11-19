document.getElementById("loginForm").addEventListener("btn", function(event) {
  event.preventDefault()
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
});

function myFunction() {
  var x = document.getElementById("myInput");
  var img = document.getElementById("topImage");
  if (x.type === "password") {
    x.type = "text";
    img.src = "image2.png";
  } else {
    x.type = "password";
    img.src = "image1.png";
  }
}