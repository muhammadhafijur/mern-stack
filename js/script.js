import data from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const newContentForEs6 = document.createElement("section");
  newContentForEs6.classList.add("cards");

  for (const item of data.es6) {
    //   creating new card and adding h2 to and content to that card.
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
  //   adding full cars to the website.
  const es6ContentElement = document.getElementById("es6-content");
  es6ContentElement.replaceWith(newContentForEs6);

  PR.prettyPrint();
});
