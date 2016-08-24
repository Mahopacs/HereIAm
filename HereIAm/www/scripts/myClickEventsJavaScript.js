
//This is the send text button click event
$(document).ready(function () {
    $("#sendtxtbtn").on("click", function () {
        //getMyLocation();  This was a TJY TEST TO SEE IF ADDRESS WAS CORRECTLY BEING SET
        SendTextMessage();
    });
});

//This is the rate  button click event
$(document).ready(function () {
    $("#ratebutton").on("click", function () {
        rateHereIAm();
    });
});

