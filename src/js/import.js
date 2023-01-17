import "bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap'
$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
var countDownDate = new Date("jan 29, 2023 12:7:35").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + " " + hours + " "
    + minutes + " " + seconds + " ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// tabs
const tabBtns = document.querySelectorAll(".tab-btn");
function switchTab(e) {

  const tabContents = document.querySelectorAll(".tab-content");
  tabBtns.forEach(tabBtn => {
    tabBtn.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  tabContents.forEach(tabContent => {
    tabContent.classList.remove("active");
  });
  const tabId = e.currentTarget.getAttribute("data-tab");
  document.getElementById(tabId).classList.add("active");
}
tabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click", switchTab);
});


