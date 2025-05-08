
  const el = document.querySelectorAll("#categories .item");
  console.log(`Number of categories {el.length}`);

  const list = document.querySelector("#categories").children

  for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    const titleElement = listItem.querySelector("h2");
    if (titleElement) {
      console.log(`Category: ${titleElement.textContent}`);
      console.log(`Elements: ${listItem.querySelector("ul").children.length}`);
    }
  }