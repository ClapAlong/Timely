
$(document).ready(function() {
    $("#calendar-tab").click (function(){
        loadCalendar();
    });
});

function loadCalendar()
{

    $(document).ready(function() {

        $('#calendar').fullCalendar({

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,listYear'
            },

            displayEventTime: false,

            googleCalendarApiKey: 'AIzaSyBXeOiSzm0iYeNJr6ZXoOtCb7K7579BegE',

            // US Holidays
            events: 'en.usa#holiday@group.v.calendar.google.com',

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