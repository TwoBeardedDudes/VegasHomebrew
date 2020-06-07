function hamburgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

window.addEventListener(
  "hashchange",
  (event) => {
    let location = window.location.hash.toString();
    let elm =
      location.substr(0, 2) == "#/"
        ? document.querySelector(`#${location.replace("#/", "")}`)
        : document.querySelector("section");
    elm.scrollIntoView();
  },
  false
);

let button = document.querySelector("button.return-top");

button.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    button.addClass("fix-position");
  } else {
    button.removeClass("fix-position");
  }
  
});