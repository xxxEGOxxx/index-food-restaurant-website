
const btn1 = document.querySelector(".food-categories_card-btn1"),
    btn2 = document.querySelector(".food-categories_card-btn2"),
    btn3 = document.querySelector(".food-categories_card-btn3"),
    price1 = document.querySelector(".categories_price1"),
    price2 = document.querySelector(".categories_price2"),
    price3 = document.querySelector(".categories_price3");

let itemsInBasket = document.querySelector(".header_cart_count");
let countOfItemsInBasket = parseInt(loadCountOfItemsInBasket());

initBasketCount();

function initBasketCount(){
    itemsInBasket.textContent = countOfItemsInBasket;
    console.log(countOfItemsInBasket);
}

function zeroIfNaN(item){
    if (isNaN(item)) {
        countOfItemsInBasket = 0;
        return true;
    }
    else {
        return false;
    }
}

function addToBasket() {
    zeroIfNaN(countOfItemsInBasket);

    countOfItemsInBasket++;
    itemsInBasket.textContent = countOfItemsInBasket;

    const randomPrice = Math.floor(Math.random() * 900) + 100;
    const chooseRandomPriceLabel = Math.floor(Math.random() * 3) + 1;
    if(chooseRandomPriceLabel == 1){
        price1.textContent = randomPrice + " ₽";
    }
    if(chooseRandomPriceLabel == 2){
        price2.textContent = randomPrice + " ₽";
    }
    if(chooseRandomPriceLabel == 3){
        price3.textContent = randomPrice + " ₽";
    }

    saveCountOfItemsInBasket();
    
    console.log(countOfItemsInBasket);
}

function saveCountOfItemsInBasket(){
    localStorage.setItem('countItemsInBucket', countOfItemsInBasket);
}

function loadCountOfItemsInBasket(){
    return localStorage.getItem('countItemsInBucket');
}

btn1.addEventListener("click", addToBasket);
btn2.addEventListener("click", addToBasket);
btn3.addEventListener("click", addToBasket);


