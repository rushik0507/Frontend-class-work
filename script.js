const formel = document.getElementById("search");
const inputel = document.getElementById("muscle");
const d = document.getElementById("fig");
async function searchex() {
  const url = `./data.json`;

  const response = await fetch(url);
  const x = await response.json();
  var flag = 0;
  console.log(x);
  for (s in x) {
    if (x[s].muscle == inputel.value) {
      const outer = document.createElement("div");
      console.log(x[s].name);
      const im = document.createElement("img");
      im.src = x[s].src;
      outer.appendChild(im);
      const para = document.createElement("p");
      para.innerText = x[s].name;
      outer.appendChild(para);
      flag = 1;
      figinner.appendChild(outer);
    }
  }
  if (flag == 0) {
    const para = document.createElement("p");
    para.innerText = "No Data Found";
    document.body.appendChild(para);
  }
  fig.appendChild(figinner);
}

formel.addEventListener("click", (event) => {
  event.preventDefault();
  figinner.remove();
  searchex();
});
