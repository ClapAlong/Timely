// Client ID and API key from the Developer Console
var CLIENT_ID = '529435855046-p3qphl9n9kdohffg5js8k6l8s1fq63n4.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

// Calendar id for full calendar to render a calendar ui
var calendarId;

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}


/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        document.getElementById('authorize-button').onclick = handleAuthClick;
        document.getElementById('signout-button').onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        document.getElementById('authorize-button').style.display = 'none';
        document.getElementById('signout-button').style.display = 'block';
        listCalendars();
    } else {
        document.getElementById('authorize-button').style.display = 'block';
        document.getElementById('signout-button').style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Retrieve a list of calendars from user, then find the primary calendar's calendar id,
 * which is the email address of user.
 */
function listCalendars()
{
    var request = gapi.client.calendar.calendarList.list();

    request.execute(function(resp){
        var calendars = resp.items;
        console.log(calendars);
        calendarId = calendars[0].id;
        console.log(calendars[0].id);
    });
}