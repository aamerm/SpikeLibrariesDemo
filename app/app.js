'use strict';

// Declare app level module which depends on views, and components
var myApp=angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  "highcharts-ng","ngResource","chartServices"
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

myApp.controller("myController", ["$scope","chartsManager",function ($scope,chartsManager) {
  var analyticalObj = {
    "headers": [ { "name": "dx", "column": "Data", "type": "java.lang.String", "hidden": false, "meta": true }, { "name": "pe", "column": "Period", "type": "java.lang.String", "hidden": false, "meta": true }, {
      "name": "ou",
      "column": "Organisation unit",
      "type": "java.lang.String",
      "hidden": false,
      "meta": true
    }, { "name": "value", "column": "Value", "type": "java.lang.Double", "hidden": false, "meta": false } ],
    "metaData": {
      "names": {
        "201506": "June 2015",
        "201507": "July 2015",
        "201508": "August 2015",
        "201509": "September 2015",
        "201510": "October 2015",
        "201511": "November 2015",
        "201512": "December 2015",
        "201601": "January 2016",
        "201602": "February 2016",
        "201603": "March 2016",
        "201604": "April 2016",
        "201605": "May 2016",
        "ou": "Organisation unit",
        "fbfJHSPpUQD": "ANC 1st visit",
        "ImspTQPwCqd": "Sierra Leone",
        "hfdmMSPBgLG": "ANC 4th or more visits",
        "dx": "Data",
        "pe": "Period",
        "pq2XI5kz2BY": "Fixed",
        "cYeuwXTCPkU": "ANC 2nd visit",
        "Jtf34kNZhzP": "ANC 3rd visit",
        "PT59n8BQbqM": "Outreach"
      },
      "dx": [ "fbfJHSPpUQD", "cYeuwXTCPkU", "Jtf34kNZhzP", "hfdmMSPBgLG" ],
      "pe": [ "201506", "201507", "201508", "201509", "201510", "201511", "201512", "201601", "201602", "201603", "201604", "201605" ],
      "ou": [ "ImspTQPwCqd" ],
      "co": [ "pq2XI5kz2BY", "PT59n8BQbqM" ]
    },
    "rows": [ [ "hfdmMSPBgLG", "201511", "ImspTQPwCqd", "9163.0" ], [ "hfdmMSPBgLG", "201510", "ImspTQPwCqd", "8167.0" ], [ "fbfJHSPpUQD", "201509", "ImspTQPwCqd", "22308.0" ], [ "cYeuwXTCPkU", "201511", "ImspTQPwCqd", "19453.0" ], [ "hfdmMSPBgLG", "201512", "ImspTQPwCqd", "7260.0" ], [ "fbfJHSPpUQD", "201601", "ImspTQPwCqd", "20020.0" ], [ "fbfJHSPpUQD", "201508", "ImspTQPwCqd", "22004.0" ], [ "fbfJHSPpUQD", "201507", "ImspTQPwCqd", "22356.0" ], [ "cYeuwXTCPkU", "201510", "ImspTQPwCqd", "16113.0" ], [ "cYeuwXTCPkU", "201507", "ImspTQPwCqd", "21130.0" ], [ "fbfJHSPpUQD", "201506", "ImspTQPwCqd", "23813.0" ], [ "cYeuwXTCPkU", "201506", "ImspTQPwCqd", "23904.0" ], [ "Jtf34kNZhzP", "201512", "ImspTQPwCqd", "10635.0" ], [ "Jtf34kNZhzP", "201605", "ImspTQPwCqd", "15699.0" ], [ "Jtf34kNZhzP", "201511", "ImspTQPwCqd", "14876.0" ], [ "fbfJHSPpUQD", "201512", "ImspTQPwCqd", "16445.0" ], [ "Jtf34kNZhzP", "201604", "ImspTQPwCqd", "13934.0" ], [ "fbfJHSPpUQD", "201511", "ImspTQPwCqd", "19691.0" ], [ "Jtf34kNZhzP", "201510", "ImspTQPwCqd", "11825.0" ], [ "cYeuwXTCPkU", "201512", "ImspTQPwCqd", "15183.0" ], [ "hfdmMSPBgLG", "201602", "ImspTQPwCqd", "7271.0" ], [ "hfdmMSPBgLG", "201603", "ImspTQPwCqd", "7715.0" ], [ "cYeuwXTCPkU", "201604", "ImspTQPwCqd", "19574.0" ], [ "Jtf34kNZhzP", "201508", "ImspTQPwCqd", "14662.0" ], [ "cYeuwXTCPkU", "201605", "ImspTQPwCqd", "23726.0" ], [ "Jtf34kNZhzP", "201507", "ImspTQPwCqd", "14852.0" ], [ "Jtf34kNZhzP", "201601", "ImspTQPwCqd", "11864.0" ], [ "fbfJHSPpUQD", "201510", "ImspTQPwCqd", "17926.0" ], [ "Jtf34kNZhzP", "201603", "ImspTQPwCqd", "12506.0" ], [ "hfdmMSPBgLG", "201605", "ImspTQPwCqd", "9590.0" ], [ "hfdmMSPBgLG", "201604", "ImspTQPwCqd", "9448.0" ], [ "Jtf34kNZhzP", "201602", "ImspTQPwCqd", "12165.0" ], [ "Jtf34kNZhzP", "201509", "ImspTQPwCqd", "15306.0" ], [ "hfdmMSPBgLG", "201507", "ImspTQPwCqd", "8875.0" ], [ "hfdmMSPBgLG", "201508", "ImspTQPwCqd", "9039.0" ], [ "hfdmMSPBgLG", "201509", "ImspTQPwCqd", "10456.0" ], [ "hfdmMSPBgLG", "201506", "ImspTQPwCqd", "9359.0" ], [ "fbfJHSPpUQD", "201605", "ImspTQPwCqd", "29461.0" ], [ "cYeuwXTCPkU", "201601", "ImspTQPwCqd", "17347.0" ], [ "cYeuwXTCPkU", "201508", "ImspTQPwCqd", "20413.0" ], [ "fbfJHSPpUQD", "201602", "ImspTQPwCqd", "18862.0" ], [ "cYeuwXTCPkU", "201602", "ImspTQPwCqd", "18578.0" ], [ "Jtf34kNZhzP", "201506", "ImspTQPwCqd", "15688.0" ], [ "fbfJHSPpUQD", "201604", "ImspTQPwCqd", "21877.0" ], [ "cYeuwXTCPkU", "201509", "ImspTQPwCqd", "20433.0" ], [ "hfdmMSPBgLG", "201601", "ImspTQPwCqd", "5639.0" ], [ "fbfJHSPpUQD", "201603", "ImspTQPwCqd", "18576.0" ], [ "cYeuwXTCPkU", "201603", "ImspTQPwCqd", "18418.0" ] ],
    "width": 4,
    "height": 48
  }

//    the analytical object passed to chart
  console.log(analyticalObj);
  $scope.chartConfig = chartsManager.drawChart(analyticalObj, "pe", [], "dx", [], 'none', '', "ANC: 1-4 visits last 12 months", "bar");
  console.log($scope.chartConfig)


    $scope.downloadImages=function(){
      var exportUrl = 'http://export.highcharts.com/';

        var optionsStr = JSON.stringify({
            "xAxis": {
              "categories": ["Jan", "Feb", "Mar"]
            },
            "series": [{
              "data": [29.9, 71.5, 106.4]
            }]
          }),
          dataString = encodeURI('async=true&type=jpeg&width=400&options=' + optionsStr);

        if (window.XDomainRequest) {
          var xdr = new XDomainRequest();
          xdr.open("post", exportUrl+ '?' + dataString);
          xdr.onload = function () {
            console.log(xdr.responseText);
            $('#container').html('<img src="' + exporturl + xdr.responseText + '"/>');
          };
          xdr.send();
        } else {
          $.ajax({
            type: 'POST',
            data: dataString,
            url: exportUrl,
            success: function (data) {
              console.log('get the file from relative url: ', data);
              $('#container').html('<img src="' + exportUrl + data + '"/>');
            },
            error: function (err) {
              debugger;
              console.log('error', err.statusText)
            }
          });
        }


    };


  $scope.downloadImagesOffline=function() {
    $('#container').highcharts({

      exporting: {
        chartOptions: { // specific options for the exported image
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true
              }
            }
          }
        },
        scale: 3,
        fallbackToExportServer: false
      },

      title: {
        text: 'Offline export'
      },

      subtitle: {
        text: 'Click the button to download as PNG/JPEG/SVG'
      },

      chart: {
        type: 'area'
      },

      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 126.0, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]

    });
  };


    /**
     *    Ken Fyrstenberg Nilsen
     *    Abidas Software
     */
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d');

    /**
     * Demonstrates how to download a canvas an image with a single
     * direct click on a link.
     */
    function doCanvas() {
      /* draw something */
      ctx.fillStyle = '#f90';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      ctx.font = '60px sans-serif';
      ctx.fillText('Code Project', 10, canvas.height / 2 - 15);
      ctx.font = '26px sans-serif';
      ctx.fillText('Click link below to save this as image', 15, canvas.height / 2 + 35);
    }

    /**
     * This is the function that will take care of image extracting and
     * setting proper filename for the download.
     * IMPORTANT: Call it from within a onclick event.
     */
    function downloadCanvas(link, canvasId, filename) {
      link.href = document.getElementById(canvasId).toDataURL();
      link.download = filename;
    }

    /**
     * The event handler for the link's onclick event. We give THIS as a
     * parameter (=the link element), ID of the canvas and a filename.
     */
    document.getElementById('download').addEventListener('click', function() {
      downloadCanvas(this, 'canvas', 'test.png');
    }, false);

    /**
     * Draw something to canvas
     */
    doCanvas();




}]

);

