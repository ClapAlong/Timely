$(document).ready(function() {
    $("#calendar-tab").click (function(){
        loadCalendar();
    });
});
var calendarId = 'liyuancheng0118@gmail.com';
function loadCalendar()
{

    //console.log(calendarId);

    $(document).ready(function() {

        console.log(calendarId);

        $('#calendar').fullCalendar({

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,listYear'
            },

            displayEventTime: false,

            eventSources: {

                googleCalendarApiKey: 'AIzaSyBXeOiSzm0iYeNJr6ZXoOtCb7K7579BegE',

                events: calendarId
            },

            eventClick: function(event) {
                // opens events in a popup window
                window.open(event.url, 'gcalevent', 'width=700,height=600');
                return false;
            },

            loading: function(bool) {
                $('#loading').toggle(bool);
            }

        });
    });
}
