'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */


const AppState = new AppState();

function AppState(){
 
AppState.prototype.instantiateProducts();    
AppState.loaditems();
AppState.allproducts = [];


let views = [] 
let labels = []
let votes = []

let productNamesString = JSON.stringify(productNames);
localStorage.setItem('productNames', productNamesString);

for(let i = 0; i < productNames.length; i++){
  productNames.push(allProducts[i].name);
  proudctVotes.push(allProuducts[i].votes);
  productViews.push(allProducts[i].views);
}

const ctx = document.getElementById('chart');

function renderChart() {

Chart.defaults.color = 'black';
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: productNames,
    datasets: [{
      label: '# of Votes',
      data: productVotes,
      borderWidth: 2,
      backgroundColor: '#e76f51',
      borderColor: 'black',
    },
    {
      label: '# of Views',
      data: productViews,
      borderWidth: 2,
      backgroundColor: '#e9c46a',
      borderColor: 'black',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




}
}

renderChart();