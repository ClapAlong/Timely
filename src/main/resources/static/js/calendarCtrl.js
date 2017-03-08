var timeSlot
var hourFromHtml;
var buttonId;
var sum;
var locationTimely;
var description;
var attendee;



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


function getHourText(obj) {
    hourFromHtml = obj.id;
    console.log("Hour you clicked is " + hourFromHtml);
}

function getTimeSlotText(obj) {
    var temp = obj.id;
    if (temp == "0 - 15") {
        timeSlot = "0";
    } else if (temp == "15 - 30") {
        timeSlot = "15";
    } else if (temp == "30 - 45") {
        timeSlot = "30";
    } else {
        timeSlot = "45";
    }
    console.log("Time slot you clicked is " + timeSlot);
}


function getId(obj) {
    buttonId = obj.id;
    console.log("Button you clicked is " + buttonId);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

function insertOfficeHourEvents() {

    var appElement = document.querySelector('[ng-app = Timely]');
    var scope = angular.element(appElement).scope();

    //start and end time
    var DateParse = moment(scope.myDate).format();
    var year = DateParse.split("T")[0];
    var start = year + "T" + hourFromHtml + ":" + timeSlot + ":00";
    var end = year + "T" + hourFromHtml + ":" + (parseInt(timeSlot)+15).toString() + ":00";

    //assign parameter
    if (buttonId == "Sun") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 42, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Sun Yu"
        attendee = "yusun@cpp.edu";
    } else if (buttonId == "Daisy") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 49, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Daisy F. Sang"
        attendee = "liyuancheng0118@yahoo.com";
    } else if (buttonId == "Tingting") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 09, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Tingting Chen"
        attendee = "liyuancheng0118@yahoo.com";
    } else if (buttonId == "Gilbert") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 14, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Gilbert Young"
        attendee = "liyuancheng0118@yahoo.com";
    } else {
        sum = scope.sumA;
        locationTimely = "Cal Poly Pomona, International Center (Building 1 Room 104), 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with International center"
        attendee = calendarId;
    }

    console.log(sum)
    console.log(locationTimely);
    console.log(description);
    console.log(attendee);
    console.log(start);
    console.log(end);


    var event = {
        'summary': sum,
        'location': locationTimely,
        'description': description,
        'start': {
            'dateTime': start,
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': end,
            'timeZone': 'America/Los_Angeles'
        },
        'attendees': [
            {'email': attendee},
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': calendarId,
        'resource': event
    });


    request.execute(function(event) {
        //appendPre('Event created: ' + event.htmlLink);
        console.log('inserted');
    });

}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */

function insertAppointmentEvents() {

    var appElement = document.querySelector('[ng-app = Timely]');
    var scope = angular.element(appElement).scope();

    //start and end time
    var start = moment(scope.startInput).format();
    var end = moment(scope.endInput).format();

    //assign parameter
    if (buttonId == "Sun") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 42, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Sun Yu"
        attendee = "yusun@cpp.edu";
    } else if (buttonId == "Daisy") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 49, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Daisy F. Sang"
        attendee = "liyuancheng0118@yahoo.com";
    } else if (buttonId == "Tingting") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 09, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Tingting Chen"
        attendee = "liyuancheng0118@yahoo.com";
    } else if (buttonId == "Gilbert") {
        sum = scope.sumOh;
        locationTimely = "Cal Poly Pomona, Building 8 - Room 14, 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with Professor Gilbert Young"
        attendee = "liyuancheng0118@yahoo.com";
    } else {
        sum = scope.sumA;
        locationTimely = "Cal Poly Pomona, International Center (Building 1 Room 104), 3801 West Temple Avenue, Pomona, CA 91768";
        description = "Appointment with International center"
        attendee = calendarId;
    }

    console.log(sum)
    console.log(locationTimely);
    console.log(description);
    console.log(attendee);
    console.log(start);
    console.log(end);


    var event = {
        'summary': sum,
        'location': locationTimely,
        'description': description,
        'start': {
            'dateTime': start,
            'timeZone': 'America/Los_Angeles'
        },
        'end': {
            'dateTime': end,
            'timeZone': 'America/Los_Angeles'
        },
        'attendees': [
            {'email': attendee},
        ],
        'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
        }
    };

    var request = gapi.client.calendar.events.insert({
        'calendarId': calendarId,
        'resource': event
    });


    request.execute(function(event) {
        //appendPre('Event created: ' + event.htmlLink);
        console.log('inserted');
    });

}