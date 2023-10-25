const formel = document.getElementById("search");
const inputel = document.getElementById("mySelect");
const inputel2 = document.getElementById("mySelect2");
const d = document.getElementById("fig");
const url = `./data.json`;

var response;
var x;

async function searchex() {
  response = await fetch(url);
  x = await response.json();
  list();
}

function list() {
  var flag = 0;
  console.log(inputel.value);
  console.log(inputel2.value);
  for (s in x) {
    if (inputel2.value == "All Equipment" && inputel.value == "All Muscles") {
      allmuscle(s);
      flag = 1;
    } else if (
      x[s].muscle == inputel.value &&
      x[s].equipment == inputel2.value
    ) {
      allmuscle(s);
      flag = 1;
    } else if (
      x[s].muscle == inputel.value &&
      inputel2.value == "All Equipment"
    ) {
      allmuscle(s);
      flag = 1;
    } else if (
      x[s].equipment == inputel2.value &&
      inputel.value == "All Muscles"
    ) {
      allmuscle(s);
      flag = 1;
    }
  }
  if (flag == 0) {
    const para = document.createElement("p");
    para.innerText = "No Data Found";
    d.appendChild(para);
  }
}

function allmuscle(s) {
  var outer = document.createElement("div");
  var im = document.createElement("img");
  im.src = x[s].src;
  outer.appendChild(im);
  var para = document.createElement("p");
  para.innerText = x[s].name;
  outer.appendChild(para);
  outer.id = x[s].name;
  outer.addEventListener("click", (event) => {
    changeBackgroundColor(outer.innerText);
  });
  d.appendChild(outer);
}

const check = document.getElementById("hit");
function changeBackgroundColor(n) {
  console.log(n);
  check.innerHTML = "";
  for (s in x) {
    if (x[s].name == n) {
      const outer2 = document.createElement("div");
      check.style.changeBackgroundColor = "black";
      var im2;
      if (x[s].isvideo) {
        im2 = document.createElement("video");
        im2.setAttribute("autoplay", "true");
        im2.setAttribute("loop", "true");
      } else {
        im2 = document.createElement("img");
      }
      console.log(im2);
      im2.src = x[s].main;
      outer2.appendChild(im2);
      const para2 = document.createElement("p");
      para2.innerText = x[s].name;
      outer2.appendChild(para2);
      outer2.id = x[s].name;
      flag = 1;
      check.appendChild(outer2);
    }
  }
}

window.addEventListener("load", function () {
  d.innerHTML = "";
  searchex();
});

mySelect2.addEventListener("change", function () {
  d.innerHTML = "";
  searchex();
});

mySelect.addEventListener("change", function () {
  d.innerHTML = "";
  searchex();
});
