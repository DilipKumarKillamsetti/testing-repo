var app = angular.module('App', ['ui.calendar'])
app.controller("calenderCtrl",function($scope){
    var date = new Date();

    $scope.eventSources = [
       [ {

            title  : 'event1',
            start  : new Date(2018,2,28,10,30),
            end    : new Date(2018,2,28,12,30),
        }]
       
    ];
    $scope.uiConfig = {
        calendar:{
          height: 450,
          editable: true,
          header:{
            left: 'month basicWeek basicDay agendaWeek agendaDay',
            center: 'title',
            right: 'today prev,next'
          },
          eventClick: $scope.alertEventOnClick,
          eventDrop: $scope.alertOnDrop,
          eventResize: $scope.alertOnResize
        }
      };


      $(document).ready(function(){
          var date = new Date();
          var d = date.getDate();
          var m = date.getMonth();
          var y = date.getFullYear();
          $('#calendar').fullCalendar({
              events : [
                  {
                        title : "Event1",
                        start : new Date(2018,5,25,10,30),
                        end   : new Date(2018,5,25,12,30)
                  }
                ]
          })
      })

})