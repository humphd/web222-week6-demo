let covidChart = new Chart("chart", {
  type: 'bar', // or 'horizontalBar'
  data: {
    labels: [
      'Unknown',
      '< 19',
      '20-29',
      '30-39',
      '40-49',
      '50-59',
      '60-69',
      '70-79',
      '80-89',
      '90+'
    ],
    datasets: [{
      label: 'Cases by Age Group',
      data: [ 1, 11, 15, 37, 30, 27, 15, 7, 13, 10 ],
      backgroundColor: 'lightblue',
      borderWidth: 1
    }]
  }
});
