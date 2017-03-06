$(document).ready(function() {
    $("#calendar-tab").click (function(){
        loadCalendar();
    });
});

function loadCalendar()
{

    console.log(calendarId);

    $(document).ready(function() {

        //console.log(calendarId);

        $('#calendar').fullCalendar({

            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,listYear'
            },

            displayEventTime: false,


            googleCalendarApiKey: 'AIzaSyBXeOiSzm0iYeNJr6ZXoOtCb7K7579BegE',

            eventSources: [
                {
                    googleCalendarId: calendarId
                },
                {
                    googleCalendarId: 'en.usa#holiday@group.v.calendar.google.com',
                    className: 'us-holiday'
                }
            ],

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

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
function insertEvents() {
    var start= myDate.value;
    console.log(start);
    var end= myDate.value;
    console.log(end);
    var sum;
    var event = {
        'summary': 'test',
        'start':{
            'date':start
        },
        'end':{
            'date':end
        },
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event
    });
    request.execute(function(event) {
        appendPre('Event created: \n' + event.htmlLink);
        console.log('inserted');
    });
}
