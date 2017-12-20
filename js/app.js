var active;
var counter = [];
var alumnas = data['AQP']['2016-2']['students'];


function activeStudents() {

for(var i = 0; i < alumnas.length; i++) {

active = alumnas[i]['active'];

if(active === true) {

}
}

return (counter.length);
}
console.log(data);


// Pintar grafica
var ctx = document.getElementById("myChart").getContext("2d");
 var myChart = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["AQP 2016-I", "AQP 2016-I Activas", "AQP 2016-I Desertaron"],
       datasets: [{
             label: 'Total',
              data: [15, 7, 8],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})


var ctx = document.getElementById("myChart2").getContext("2d");
 var myChart2 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["AREQUIPA 2017-I","AREQUIPA 2017-I Activas","AREQUIPA 2017-I Desertaron"],
       datasets: [{
             label: 'Total',
              data: [15, 8, 7],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart3").getContext("2d");
 var myChart3 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["CDMX 2017-I","CDMX 2017-I Activas","CDMX 2017-I Desertaron"],
       datasets: [{
             label: 'Total',
              data: [24, 9, 15],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart4").getContext("2d");
 var myChart4 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["CDMX 2017-II","CDMX 2017-II Activas","CDMX 2017-II Desertaron"],
       datasets: [{
             label: 'Total',
              data: [46, 21, 25],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart5").getContext("2d");
 var myChart5 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["LIMA 2016-II","LIMA 2016-II Activas","LIMA 2016-II Desertaron"],
       datasets: [{
             label: 'Total',
              data: [35, 16, 19],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart6").getContext("2d");
 var myChart6 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["LIMA 2017-I","LIMA 2017-I Activas","LIMA 2017-I Desertaron"],
       datasets: [{
             label: 'Total',
              data: [17, 12, 5],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart7").getContext("2d");
 var myChart7 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["LIMA 2017-II","LIMA 2017-II Activas","LIMA 2017-II Desertaron"],
       datasets: [{
             label: 'Total',
              data: [14, 6, 8],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart8").getContext("2d");
 var myChart8 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["SANTIAGO 2016-II","SANTIAGO 2016-II Activas","SANTIAGO 2016-II Desertaron"],
       datasets: [{
             label: 'Total',
              data: [11, 3, 8],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart9").getContext("2d");
 var myChart9 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["SANTIAGO 2017-I","SANTIAGO 2017-I Activas","SANTIAGO 2017-I Desertaron"],
       datasets: [{
             label: 'Total',
              data: [23, 14, 9],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})

var ctx = document.getElementById("myChart10").getContext("2d");
 var myChart10 = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["SANTIAGO 2017-II","SANTIAGO 2017-II Activas","SANTIAGO 2017-II Desertaron"],
       datasets: [{
             label: 'Total',
              data: [59, 26, 33],
             backgroundColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderColor: [
               'rgba(153, 102, 255, 0.6)',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
             ],
             borderWidth: 1
         }]

       },
       options:  {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})
