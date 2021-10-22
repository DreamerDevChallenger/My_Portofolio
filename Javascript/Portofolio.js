togglerClick();
function togglerClick() {
  let toggleButton = document.querySelector("#button-toggle");
  toggleButton.addEventListener("click", function (event) {
    event.preventDefault;
    {
      if (document.getElementById("header").style.marginLeft == "0px") {
        document.getElementById("header").style.marginLeft = "-350px";
      } else {
        document.getElementById("header").style.marginLeft = "0px";
      }
    }
  });
}
currentDate();
function currentDate() {
  let listMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".dateMonth").innerHTML =
    listMonth[new Date().getMonth()];
  document.querySelector(".dateYear").innerHTML = new Date().getFullYear();
}
sliderBox();
function sliderBox() {
  const items = document.querySelectorAll(".passion-block");
  const numberSlide = items.length;
  const latest = document.querySelector(".btn-slide-left");
  const next = document.querySelector(".btn-slide-right");
  let count = 0;
  function slideLatest() {
    items[count].classList.remove("active-picture");

    if (count > 0) {
      count--;
    } else {
      count = numberSlide - 1;
    }
    items[count].classList.add("active-picture");
  }
  latest.addEventListener("click", slideNext);
  function slideNext() {
    items[count].classList.remove("active-picture");
    if (count < numberSlide - 1) {
      count++;
    } else {
      count = 0;
    }
    items[count].classList.add("active-picture");
  }
  next.addEventListener("click", slideNext);
  setInterval(function () {
    slideNext();
  }, 7500);
}
function downloadCvOnClick() {
  if (
    window.confirm("Voulez vous enrengistré mon cv pour pouvoir le consulté ?")
  ) {
    location.href = "./File/Cv+Ilyas+Boukhechem.docx";
  } else {
    return false;
  }
}
