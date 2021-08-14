import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const newContentForEs6 = document.createElement("section");
  newContentForEs6.classList.add("cards");

  for (const item of data.es6) {
    const cardContentElement = document.createElement("div");
    cardContentElement.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = item.title;
    cardContentElement.appendChild(title);

    const cardContent = document.createElement("pre");
    cardContent.classList.add("prettyprint");
    cardContent.innerText = item.content;
    cardContentElement.appendChild(cardContent);

    newContentForEs6.appendChild(cardContentElement);
  }

  const es6ContentElement = document.getElementById("es6-content");
  es6ContentElement.appendChild(newContentForEs6);
  PR.prettyPrint();
});
