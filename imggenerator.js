// new script file
document.addEventListener("DOMContentLoaded", function () {
  const key = "MkPXlv0g3JhPcFqDmzvhYyZUnD-WEwQSoSfd4lXjiOg";

  const formel = document.getElementById("nav-form");
  const inputel = document.getElementById("search");
  const searchresult = document.querySelector(".team");
  const showmore = document.querySelector(".show-more");

  let inputdata = "";
  let page = 1;

  async function searchImage() {
    inputdata = inputel.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${key}`;
    // const url = `./data.json?name=${inputdata}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1) {
      searchresult.innerHTML = "";
    }

    results.map((result) => {
      const image = document.createElement("img");
      image.src = result.src;
      searchresult.appendChild(image);
    });

    page++;
    if (page > 1) {
      showmore.style.display = "flex";
    }
  }

  formel.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImage();
  });

  showmore.addEventListener("click", () => {
    searchImage();
  });
});
