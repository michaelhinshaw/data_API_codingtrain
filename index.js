'use strict';

chartIt();

async function chartIt() {
  const data = await getData();
  const ctx = document.getElementById('chart').getContext('2d');

  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: data.date,
      datasets: [
        {
          label: 'Positive Covid 19 cases in the United States by Date',
          data: data.cases,
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
  let fullData = [];
  const response = await fetch('test.csv');
  const data = await response.text();

  const table = data.split('\n').slice();
  table.forEach(row => {
    const caseObjects = row.split(',').slice(4);

    for (let i = 0; i < caseObjects.length; i++) {
      fullData.push(caseObjects[i]);
      // xlabels.push(date[i]);
    }
    // for (let j = 0; j < cases.length; j++) {
    //   cases.push(caseObjects[j]);
    // }

    // const cases = row.split(',').slice(4);
    //   ycases.push(cases[j]);

    // }
    console.log(fullData);
  });
  let date = fullData.slice(0, 408);
  console.log(date);
  let cases = fullData.slice(409, 816);
  console.log(cases);
  return { date, cases };
}
