(function () {
    'use strict';

    function handleZoom() {
        if (document.documentElement.clientWidth !== window.innerWidth ||
            document.documentElement.clientHeight !== window.innerHeight) {
            document.body.style.zoom = 'reset';
        }
    }

    window.addEventListener('resize', handleZoom);
    handleZoom();
}());
var coll = document.getElementsByClassName("collapsible");
var i;
document.addEventListener("DOMContentLoaded", function() {
  var sub1 = document.querySelector(".sub1");
  var det1 = document.querySelector(".det1");

  sub1.addEventListener("click", function() {
      det1.style.display = det1.style.display === "none" ? "block" : "none";
      sub1.querySelector(".plus").textContent = det1.style.display === "none" ? "+" : "-";
  });
});
// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }