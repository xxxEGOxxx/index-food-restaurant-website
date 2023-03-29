//1. const let
const btn = document.querySelector(".test"),
      price = document.querySelector(".test-price");

let count = document.querySelector(".header_cart_count");
let count2 = count.textContent;

function test() {
    count2++;
    count.textContent = count2;
    price.textContent = "140 ₽";
}

function testSelector() {
    console.log(selAll)
}

btn.addEventListener("click", test);
