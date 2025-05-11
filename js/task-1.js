
  const el = document.querySelectorAll("#categories .item");
  console.log(`Number of categories ${el.length}`);

  const listItems = document.querySelectorAll("#categories > li.item");

  listItems.forEach(listItem => {
    const titleElements = listItem.querySelectorAll("h2");
    const listElements = listItem.querySelectorAll("ul");
  
    if (titleElements.length > 0 && listElements.length > 0) {
      console.log(`Category: ${titleElements[0].textContent}`);
      console.log(`Elements: ${listElements[0].children.length}`);
    }
  });