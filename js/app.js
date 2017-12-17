
// Pintar grafica
var ctx = document.getElementById("myChart").getContext("2d");
 var myChart = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["AQP 2016-2","AQP 2016-2 Activas","AQP 2016-2 Desertaron"],
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
 var myChart = new Chart (ctx, {
 	type: 'bar',
 	data: {
 		labels: ["AQP 2017-1","AQP 2017-1 Activas","AQP 2017-1 Desertaron"],
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
       options: {
           scales: {
               yAxes: [{
                   ticks: {
                       beginAtZero:true
                   }
               }]
        }

      }
})
