const products = document.querySelector(".products-list");

const getItems = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayItems(data);
    })
    .catch((error) => console.error("Error Fetching Data:", error));
};

const displayItems = (products) => {
  products.forEach((items) => {
    const itemDiv = document.createElement("div");
    console.log(items);
    itemDiv.className = "items";
    itemDiv.innerHTML = ``;
  });
};

getItems();
