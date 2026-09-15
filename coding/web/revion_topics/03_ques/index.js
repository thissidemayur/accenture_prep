let products = [
  { id: 1, name: "iPhone", price: 1000, category: "electronics" },
  { id: 2, name: "Laptop", price: 1500, category: "electronics" },
  { id: 3, name: "Headphones", price: 200, category: "electronics" },
  { id: 4, name: "Keyboard", price: 100, category: "accessories" },
  { id: 5, name: "Mouse", price: 50, category: "accessories" },
  { id: 6, name: "Monitor", price: 800, category: "electronics" },
  { id: 7, name: "Desk Chair", price: 350, category: "furniture" },
  { id: 8, name: "Smart Watch", price: 300, category: "electronics" },
  { id: 9, name: "USB-C Cable", price: 25, category: "accessories" },
  { id: 10, name: "Backpack", price: 70, category: "apparel" },
  { id: 11, name: "Desk Lamp", price: 45, category: "accessories" },
  { id: 12, name: "Power Bank", price: 60, category: "accessories" },
  { id: 13, name: "T-Shirt", price: 30, category: "apparel" },
  { id: 14, name: "Gaming Desk", price: 600, category: "furniture" },
  { id: 15, name: "Speakers", price: 150, category: "electronics" },
];

const productsDiv = document.querySelector("#products");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#categoryFilter");
const priceFilter = document.querySelector("#priceFilter");
const sortFilter = document.querySelector("#sort");
const resultCount = document.querySelector("#resultCount");

renderProducts(products);
// render product
function renderProducts(productList) {
  productsDiv.innerHTML = "";

  if (resultCount) {
    resultCount.textContent = `Showing ${productList.length} product(s)`;
  }

   if (productList.length === 0) {
     console.log("result show");
     const showResult = document.createElement("div");
     showResult.className = "showResult";
     showResult.style.color = "red";
     showResult.textContent = "No result found";
     console.log("showResult: ", showResult);
     productsDiv.appendChild(showResult);
     console.log("productsDiv: ", productsDiv);
   }


  productList.forEach((product) => {
    const productDiv = document.createElement("div");
    const productNameH3 = document.createElement("h3");
    const productPriceP = document.createElement("p");
    const productDeleteBtn = document.createElement("button")
    const productCategoryH4 = document.createElement("h4");

    productDiv.className = "product";
    productDiv.dataset.id = product.id;
    productNameH3.textContent = product.name;
    productPriceP.textContent = `₹${product.price}`;
    productCategoryH4.textContent = product.category
    productDeleteBtn.textContent="Delete"
    productDeleteBtn.className = "delete"

    productNameH3.style.display = "inline-block";
    productNameH3.style.width = "150px";
    productPriceP.style.display = "inline-block";
    productPriceP.style.width = "100px";
    productCategoryH4.style.display = "inline-block";
productCategoryH4.style.width="200px"
    productDiv.append(
      productNameH3,
      productPriceP,
      productCategoryH4,
      productDeleteBtn,
    );
    productsDiv.appendChild(productDiv);
  });
}


// apply filter
function applyFilterAndSort() {
  const searchProduct = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;
  const selectedSort = sortFilter.value;

  const result = products.filter((product) => {
    // search filter
    const matchesSearch = product.name
      .trim()
      .toLowerCase()
      .includes(searchProduct);

    // category filter
    const matchesCategory =
      selectedCategory === "all" || selectedCategory === product.category;

    // price filter
    let matchesPrice = true;
    if (selectedPrice === "under500") {
      matchesPrice = product.price < 500;
    } else if (selectedPrice === "500to1000") {
      matchesPrice = product.price >= 500 && product.price <= 1000;
    } else if (selectedPrice === "above1000") {
      matchesPrice = product.price > 1000;
    }

    return matchesCategory && matchesSearch && matchesPrice;
  });


  // sort the product
  if (selectedSort === "priceLow") {
    result.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHigh") {
    result.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "nameAZ") {
    result.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
    );
  }
 
  renderProducts(result);
}



// search product
searchInput.addEventListener("input", applyFilterAndSort);

// cateogry filter
categoryFilter.addEventListener("change", applyFilterAndSort);

// price filter
priceFilter.addEventListener("change", applyFilterAndSort);

// sort filter
sortFilter.addEventListener("change", applyFilterAndSort);

// delete product
productsDiv.addEventListener("click",(event)=>{
  const btn = event.target.closest(".delete")
  if(!btn) {
    return
  }
  const productDiv = event.target.closest(".product");

  if(!productDiv) {
    return;
  }
  const productId = productDiv.dataset.id

  if(!productId) {
    return
  }
   products = products.filter((p) => p.id !== Number(productId));
   applyFilterAndSort()

})
