import data from "./data.js";

function createNewSection(cardsContent) {
  const newContentCars = document.createElement("section");
  newContentCars.classList.add("cards");

  for (const item of cardsContent) {
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

    newContentCars.appendChild(cardContentElement);
  }

  return newContentCars;
}

document.addEventListener("DOMContentLoaded", () => {
  //   replacing full cars to the website.
  const newContentForEs6 = createNewSection(data.es6);
  const es6ContentElement = document.getElementById("es6-content");
  es6ContentElement.replaceWith(newContentForEs6);

  const vanillaJsNewElement = createNewSection(data.vanilla);
  const vanillaJsOldElement = document.getElementById("vanilla");
  vanillaJsOldElement.replaceWith(vanillaJsNewElement);

  // testing
  const domNewElement = createNewSection(date.dom);
  const domOldElement = document.getElementById("dom");
  domOldElement.replaceWith(domNewElement);

  PR.prettyPrint();
});
