'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
//   // TODO: Fill in this instance method to save product data to local storage
    let stringifiedProducts = JSON.stringify(this.allProducts)
    localStorage.setItem('allProducts', stringifiedProducts);
      } 


AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
this.instantiateProducts();

// Check to see if there are products in local storage
// If there are products in local storage, then reintantiate your product arrayw with those products
// If there are not products inside, then use instantiate products methods to fill local storage with new products

let localProducts = localStorage.getItem('allProducts')


    if (localProducts) {
      localProducts = JSON.parse(localProducts);
      for(let i = 0; i < localProducts.length; i++){
        console.log(localProducts)
        if(localProducts[i].name === 'sweep'){
          let reconstructedProducts = new Product(localProducts[i].name, 'png');
          reconstructedProducts.source = localProducts[i].source;
          reconstructedProducts.timesClicked = localProducts[i].timesClicked;
          reconstructedProducts.timesShown = localProducts[i].timesShown;

          localProducts.push(reconstructedProducts);
        } else{
          let reconstructedProducts = new Product(localProducts[i].name);
          reconstructedProducts.source = localProducts[i].source;
          reconstructedProducts.timesClicked = localProducts[i].timesClicked;
          reconstructedProducts.timesShown = localProducts[i].timesShown;

          localProducts.push(reconstructedProducts);

        }
        }
      }
        else{
        AppState.prototype.instantiateProducts();    
      }
    
    }

  


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}

