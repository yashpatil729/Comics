(function($) {
  'use strict';
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      var substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      for (var i = 0; i < strs.length; i++) {
        if (substrRegex.test(strs[i])) {
          matches.push(strs[i]);
        }
      }

      cb(matches);
    };
  };

  var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
    'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
    'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'states',
    source: substringMatcher(states)
  });
  // constructs the suggestion engine
  var states = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    // `states` is an array of state names defined in "The Basics"
    local: states
  });

  $('#bloodhound .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  }, {
    name: 'states',
    source: states
  });
})(jQuery);

if ($("#sales-chart").length) {
  var SalesChartCanvas = $("#sales-chart").get(0).getContext("2d");
  var SalesChart = new Chart(SalesChartCanvas, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      datasets: [
        // {
        //   label: 'Factory',
        //   data: 
        //   //[0, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 72],
        //   [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, ],
        //   backgroundColor: '#4B49AC',
        //   stack: 0
        // },
        // {
        //   label: 'Vehicles',
        //   data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
        //   [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, ],
        //   backgroundColor: '#98BDFF',
        //   stack: 0
        // },
        // {
        //   label: 'House',
          
        //   data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
        //   [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, ],
        //   backgroundColor: '#00FFFF',
        //   stack: 0
        // },
        {
          // label: 'AQI Prediction',
          // categoryPercentage: 0.4,
          data: 
          [5, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 301],
          // [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, 3, 6, 5, 4, 2],
          backgroundColor: getcolors([0, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 301]),
          stack: 1
        },
        // {
        //   label: 'Vehicles  Prediction',
        //   // categoryPercentage: 0.4,
        //   data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
        //   [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, 6, 4, 3, 1, 9],
        //   backgroundColor: 'rgb(255, 49, 49)',
        //   stack: 1
        // },
        // {
        //   label: 'House  Prediction',
        //   // categoryPercentage: 0.4, // notice here 
        //   // barPercentage: 0.4,  
        //   data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
        //   [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, 3, 0, 2, 2, 0],
        //   backgroundColor: 'rgb(250, 160, 160)',
        //   stack: 1
        // }
      ]
    },
    options: {
      // cornerRadius: 5,
      aspectRatio:4,
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 20,
          bottom: 0
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Particulate Matter (µg/m³)',
            fontStyle:'bold',
            
          },
          display: true,
          stcked:true,
          gridLines: {
            display: true,
            drawBorder: false,
            color: "#F2F2F2"
          },
          ticks: {
            display: true,
            min: 0,
            // max: 120,
            callback: function(value, index, values) {
              return  value + ''//'$' ;
            },
            autoSkip: true,
            maxTicksLimit: 10,
            fontColor:"#6C7383"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time (hour)',
            fontStyle:'bold',
            
          },
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#6C7383"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          },
          barPercentage: 1
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    },
  });
  document.getElementById('sales-legend').innerHTML = SalesChart.generateLegend();
}
if ($("#sales-chart2").length) {
  var SalesChartCanvas = $("#sales-chart2").get(0).getContext("2d");
  var SalesChart = new Chart(SalesChartCanvas, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      datasets: [
        // {
        //   label: 'Factory',
        //   data: 
        //   //[0, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 72],
        //   [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, ],
        //   backgroundColor: '#4B49AC',
        //   stack: 0
        // },
        // {
        //   label: 'Vehicles',
        //   data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
        //   [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, ],
        //   backgroundColor: '#98BDFF',
        //   stack: 0
        // },
        // {
        //   label: 'House',
          
        //   data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
        //   [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, ],
        //   backgroundColor: '#00FFFF',
        //   stack: 0
        // },
        {
          label: 'Factory Prediction',
          // categoryPercentage: 0.4,
          data: 
          // [0, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 72],
          [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, 3, 6, 5, 4, 2],
          backgroundColor: 'rgb(136, 8, 8)',
          stack: 1
        },
        {
          label: 'Vehicles  Prediction',
          // categoryPercentage: 0.4,
          data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
          [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, 6, 4, 3, 1, 9],
          backgroundColor: 'rgb(255, 49, 49)',
          stack: 1
        },
        {
          label: 'House  Prediction',
          // categoryPercentage: 0.4, // notice here 
          // barPercentage: 0.4,  
          data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
          [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, 3, 0, 2, 2, 0],
          backgroundColor: 'rgb(250, 160, 160)',
          stack: 1
        }
      ]
    },
    options: {
      // cornerRadius: 5,
      aspectRatio:4,
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 20,
          bottom: 0
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Particulate Matter (µg/m³)',
            fontStyle:'bold',
            
          },
          display: true,
          stcked:true,
          gridLines: {
            display: true,
            drawBorder: false,
            color: "#F2F2F2"
          },
          ticks: {
            display: true,
            min: 0,
            // max: 120,
            callback: function(value, index, values) {
              return  value + ''//'$' ;
            },
            autoSkip: true,
            maxTicksLimit: 10,
            fontColor:"#6C7383"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time (hour)',
            fontStyle:'bold',
            
          },
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#6C7383"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          },
          barPercentage: 1
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    },
  });
  console.log(SalesChart.generateLegend())
  document.getElementById('sales-legend2').innerHTML = SalesChart.generateLegend().replace(/\"1-legend"/g, '"legend"');
}

if ($("#measure-chart").length) {
  var SalesChartCanvas = $("#measure-chart").get(0).getContext("2d");
  var SalesChart = new Chart(SalesChartCanvas, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      datasets: [
        {
          // label: 'Factory',
          data: 
          [4, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 72],
        //   [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, ],
          backgroundColor: '#4B49AC',
          stack: 0
        },
        // {
        //   label: 'Vehicles',
        //   data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
        //   [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, ],
        //   backgroundColor: '#98BDFF',
        //   stack: 0
        // },
        // {
        //   label: 'House',
          
        //   data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
        //   [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, ],
        //   backgroundColor: '#00FFFF',
        //   stack: 0
        // },
        // {
        //   label: 'Factory Prediction',
        //   // categoryPercentage: 0.4,
        //   data: 
        //   // [0, 16, 93, 75, 51, 53, 90, 23, 64, 56, 66, 48, 58, 18, 76, 58, 24, 48, 24, 69, 65, 72, 46, 72],
        //   [4, 2, 2, 2, 3, 2, 4, 0, 6, 8, 0, 0, 9, 2, 8, 4, 8, 2, 0, 3, 6, 5, 4, 2],
        //   backgroundColor: 'rgb(136, 8, 8)',
        //   stack: 1
        // },
        // {
        //   label: 'Vehicles  Prediction',
        //   // categoryPercentage: 0.4,
        //   data: //[74, 83, 2, 16, 18, 24, 0, 61, 25, 11, 20, 13, 41, 14, 4, 23, 21, 13, 55, 15, 12, 15, 4, 26],
        //   [8, 0, 0, 2, 9, 4, 2, 6, 9, 5, 8, 5, 5, 9, 2, 5, 3, 1, 8, 6, 4, 3, 1, 9],
        //   backgroundColor: 'rgb(255, 49, 49)',
        //   stack: 1
        // },
        // {
        //   label: 'House  Prediction',
        //   // categoryPercentage: 0.4, // notice here 
        //   // barPercentage: 0.4,  
        //   data: //[26, 1, 5, 9, 31, 23, 10, 16, 11, 33, 14, 39, 1, 68, 20, 19, 55, 39, 21, 16, 23, 13, 50, 2],
        //   [0, 0, 2, 3, 0, 7, 8, 6, 0, 9, 4, 4, 8, 2, 2, 5, 2, 1, 3, 3, 0, 2, 2, 0],
        //   backgroundColor: 'rgb(250, 160, 160)',
        //   stack: 1
        // }
      ]
    },
    options: {
      // cornerRadius: 5,
      aspectRatio:4,
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 20,
          bottom: 0
        }
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Particulate Matter (µg/m³)',
            fontStyle:'bold',
            
          },
          display: true,
          stcked:true,
          gridLines: {
            display: true,
            drawBorder: false,
            color: "#F2F2F2"
          },
          ticks: {
            display: true,
            min: 0,
            // max: 120,
            callback: function(value, index, values) {
              return  value + ''//'$' ;
            },
            autoSkip: true,
            maxTicksLimit: 10,
            fontColor:"#6C7383"
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time (hour)',
            fontStyle:'bold',
            
          },
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontColor: "#6C7383"
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            display: false
          },
          barPercentage: 1
        }]
      },
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 0
        }
      }
    },
  });
  console.log(SalesChart.generateLegend())
  document.getElementById('sales-legend2').innerHTML = SalesChart.generateLegend().replace(/\"1-legend"/g, '"legend"');
}
function getcolors(d){
  let f=Array()
  for(let i=0;i<d.length;i++){
    if(d[i]<51)
      f.push('rgb(0, 176, 80)')
    else if(d[i]<101)
      f.push('rgb(146, 208, 80)')
    else if(d[i]<201)
      f.push('rgb(255, 255, 0)')
    else if(d[i]<301)
      f.push('rgb(255, 153, 0)')
    else if(d[i]<401)
      f.push('rgb(255, 0, 0)')
    else if(d[i]>=401)
      f.push('rgb(255, 0, 0)')
    else
      f.push('rgb(255, 255, 0255)')
  }
  return f
}
// console.log(SalesChart.generateLegend().replace(/\"0-legend"/g, '"legend"'));

// console.log(SalesChart.generateLegend().replace(/\"0-legend"/g, '"legend"'));