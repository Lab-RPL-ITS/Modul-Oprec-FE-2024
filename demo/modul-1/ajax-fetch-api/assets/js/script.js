import { Paginator } from "./array-paginator.js";

(function () {
  "use strict";

  let CURRENT_PAGE = 1;
  const MAX_PER_PAGE = 10;

  let paginator;

  const renderData = () => {
    const list = document.getElementById("list");
    list.innerHTML = "";
    const data = paginator.page(CURRENT_PAGE);
    data.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      list.appendChild(li);
    });

    renderPagination();
  };

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const _data = await response.json();
      paginator = new Paginator(_data, MAX_PER_PAGE, CURRENT_PAGE);
      renderData();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const nextPage = () => {
    if (paginator.hasNext()) {
      CURRENT_PAGE++;
      renderData();
    }
  };

  const previousPage = () => {
    if (paginator.hasPrevious()) {
      CURRENT_PAGE--;
      renderData();
    }
  };

  fetchData();
  document.getElementById("btn_next").addEventListener("click", nextPage);
  document.getElementById("btn_prev").addEventListener("click", previousPage);
})();
