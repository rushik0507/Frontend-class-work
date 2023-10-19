const formel = document.getElementById("search");
const inputel = document.getElementById("muscle");

async function searchex() {
  const url = `./data.json`;

  const response = await fetch(url);
  const x = await response.json();
  var flag = 0;
  console.log(x);
  for (s in x) {
    if (x[s].muscle == inputel.value) {
      const para = document.createElement("p");
      para.innerText = x[s].name;
      document.body.appendChild(para);
      console.log(x[s].name);
      flag = 1;
    }
  }
  if (flag == 0) {
    const para = document.createElement("p");
    para.innerText = "No Data Found";
    document.body.appendChild(para);
  }
}

formel.addEventListener("submit", (event) => {
  event.preventDefault();
  searchex();
});
