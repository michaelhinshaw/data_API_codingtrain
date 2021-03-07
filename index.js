'use strict';

const xlabels = [];
const ycases = [];

chartIt();

async function chartIt() {
  const data = await getData();
  const ctx = document.getElementById('chart').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: xlabels,
      datasets: [
        {
          label: 'Positive Covid 19 cases in the United States by Date',
          data: ycases,
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}

async function getData() {
  // const xs = [];
  // const ys = [];
  const response = await fetch('test.csv');
  const data = await response.text();

  const table = data.split('\n').slice();
  table.forEach(row => {
    const date = row.split(',').slice(4);
    for (let i = 0; i < date.length; i++) {
      console.log(date[i]);
      xlabels.push(date[i]);
    }
    const cases = row.split(',').slice(4);
    for (let j = 0; j < cases.length; j++) {
      console.log(cases[j]);
      ycases.push(cases[j]);
    }
    console.log(date);
  });
  // return { xs, ys };
}
