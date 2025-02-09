// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
console.log(state.pepperoni)

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }

  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMush)=>{
    if(state.mushrooms){
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((onePepper)=>{
    if(state.greenPeppers){
      onePepper.style.visibility = "visible";
    } else {
      onePepper.style.visibility = "hidden";
    };
  });
};

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    whiteSauce.classList.add("sauce-white");
  } else {
    whiteSauce.classList.remove("sauce-white");
  }

}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  if(state.glutenFreeCrust){
    crust.classList.add("crust-gluten-free")
  } else {
    crust.classList.remove("crust-gluten-free")
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepperoniButton = document.querySelector(".btn-pepperoni");
  if (state.pepperoni) {
    pepperoniButton.classList.add("active");
  } else {
    pepperoniButton.classList.remove("active");
  };

  let mushroomsButton = document.querySelector(".btn-mushrooms");
  if (state.mushrooms) {
    mushroomsButton.classList.add("active");
  } else {
    mushroomsButton.classList.remove("active");
  };

  let greenPepperButton = document.querySelector(".btn-green-peppers");
  if (state.greenPeppers) {
    greenPepperButton.classList.add("active");
  } else {
    greenPepperButton.classList.remove("active");
  };

  let sauceButton = document.querySelector(".btn-sauce");
  if (state.whiteSauce) {
    sauceButton.classList.add("active");
  } else {
    sauceButton.classList.remove("active");
  };

  let crustButton = document.querySelector(".btn-crust");
  if (state.glutenFreeCrust) {
    crustButton.classList.add("active");
  } else {
    crustButton.classList.remove("active");
  };
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let panelPrice = document.querySelectorAll(".price ul li");
  console.log(panelPrice);
  panelPrice.style.visibility = "hidden";

  let ifActive = (price, state)=>{
    if (state) {
      price.style.visibility = "visible";
    } else {
      price.visibility = "hidden";
  };
}

// renderEverything();
};

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", ()=>{
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn-green-peppers").addEventListener("click", ()=>{
  state.greenPeppers = !state.greenPeppers;
  renderEverything()
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn-sauce").addEventListener("click", ()=>{
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn-crust").addEventListener("click", ()=>{
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});