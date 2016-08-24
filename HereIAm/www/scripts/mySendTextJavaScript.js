
function SendTextMessage() {
    try {
        var intent = 'INTENT'; //leave empty for sending sms using default intent
        var message = "Hi!  I am at " + address + ".\n\nSent via 'HERE I AM'"
        //var number = '8608810738';
        var number = "";

        sms.send(number, message, intent, onMessageSuccess, onMessageError);
    } catch (e) {
        alert("Error sending text message.  Error =" + e.message);
    }
}

function onMessageSuccess() {
    // alert('Message sent successfully');
}

function onMessageError(e) {
    alert('Message Failed:' + e);
}