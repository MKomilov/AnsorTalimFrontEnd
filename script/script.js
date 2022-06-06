"use strict"
$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

    $('.carousel').owlCarousel({
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 2,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  })
});


const targetDiv = document.getElementById("hiddenNews");
const btn = document.getElementById("toggle");

btn.onclick = function () {
  if (targetDiv.style.display !== "block") {
    targetDiv.style.display = "block";
    btn.innerHTML = "Orqaga qaytish";
  } else {
    targetDiv.style.display = "none";
    btn.innerHTML = "Barcha yangiliklar";
  }
}

function myFunction() {
  var x = document.getElementById("hiddenCourses");
  var y = document.getElementById("toggle1");
  if (x.style.display !== "block") {
    x.style.display = "block";
    y.innerHTML = "Orqaga qaytish";
  } else {
    x.style.display = "none";
    y.innerHTML = "Barcha yangiliklar";
  }
}

  let modal = document.getElementById("myModal");
  let modalBtn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];

  modalBtn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

let modal1 = document.getElementById("myModal");
let modalBtn1 = document.getElementById("myBtn1");
let span1 = document.getElementsByClassName("close")[0];

modalBtn1.onclick = function() {
  modal1.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

let modal2 = document.getElementById("myModal");
let modalBtn2 = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("close")[0];

modalBtn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

