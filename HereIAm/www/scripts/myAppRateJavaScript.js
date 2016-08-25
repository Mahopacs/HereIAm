//alert("I am here myAPPRATe"); This is 3.o

AppRate.preferences = {
    useLanguage: 'en',
    openStoreInApp: true,
    displayAppName: 'My custom app title',
    usesUntilPrompt: 5,
    promptAgainForEachNewVersion: false,
    storeAppURL: {
        ios: '<my_app_id>',
        android: 'market://details?id=com.tedjyoung.hereiam',
        windows: 'ms-windows-store://pdp/?ProductId=<the apps Store ID>',
        blackberry: 'appworld://content/[App Id]/',
        windows8: 'ms-windows-store:Review?name=<the Package Family Name of the application>'
    },
    customLocale: {
        title: "Rate 'Here I Am'",
        message: "If you enjoy using 'Here I Am', would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
        cancelButtonLabel: "No, Thanks",
        laterButtonLabel: "Remind Me Later",
        rateButtonLabel: "Rate It Now"
    }
};

AppRate.preferences = {
    useCustomRateDialog: true,
    callbacks: {
        onRateDialogShow: function (callback) {
            callback(1) // cause immediate click on 'Rate Now' button 
        },
        onButtonClicked: function (buttonIndex) {
            console.log("onButtonClicked -> " + buttonIndex);
        }
    }
};

function rateHereIAm() {
    try {
        AppRate.promptForRating(false);
    } catch (e) {
        alert("Error rating app.  Error = " + e.message);
    }
}



