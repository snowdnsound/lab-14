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


const ChartState = new AppState();

// function AppState(){
 
// AppState.prototype.instantiateProducts();    
// AppState.loaditems();
// AppState.allproducts = [];


// let views = [] 
// let labels = []
// let votes = []

// let productNamesString = JSON.stringify(productNames);
// localStorage.setItem('productNames', productNamesString);



const ctx = document.getElementById('chart');

function renderChart() {

  const chartState = new AppState();

  console.log('CHART STATE IN BEGINNING', chartState)



  chartState.loadItems();
  console.log('CHART STATE AFTER PRODUCTS HAS BEEN LOADED', chartState)


let views = [] 
let labels = []
let votes = []

console.log(chartState.allProducts.length)


  for(let i = 0; i < chartState.allProducts.length; i++){
  labels.push(chartState.allProducts[i].name);
  votes.push(chartState.allProducts[i].timesShown);
  views.push(chartState.allProducts[i].timesClicked);
}

console.log('labels', labels)
console.log('views', views)
console.log('votes', votes)


Chart.defaults.color = 'black';
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: '# of Votes',
      data: votes,
      borderWidth: 2,
      backgroundColor: '#e76f51',
      borderColor: 'black',
    },
    {
      label: '# of Views',
      data: views,
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


renderChart();