
const input = document.querySelector("#search")
const products = document.querySelectorAll(".product") // return nodelist which support forEach

// set default input value
input.value = "nana";

// create resuable filter
const filterProduct = ()=>{
     const currentInputValue = input.value;
     const inputValue = currentInputValue?.toLowerCase().trim();

     products.forEach((product) => {
       const productName = product.textContent.toLowerCase().trim();
       const isFound = productName.includes(inputValue);
       if (isFound) {
         // using css DOM property we show the element. but i forget how to use it
         product.style.display = "";
       } else {
         // using css DOM property we hide the element. but i forget how to use it
         product.style.display = "none";
       }
     });
}

// run the filter instantly on page load so "nana" work immediatley
filterProduct()

// // run the filter
// input.addEventListener("input", filterProduct);






/*
1. element.textContent → reads/sets text inside an element
2. input.value         → reads/sets the current value of an input
*/

