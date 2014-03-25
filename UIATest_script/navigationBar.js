
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var navigationBar = app.navigationBar();


function rightSide ()
{
    var plusButton = navigationBar.rightButton();
    var messagePlus = "Plus button";
    if (plusButton.isValid) {
        UIALogger.logPass(messagePlus);
    } else {
        UIALogger.logError(messagePlus);
    }
}

function leftSide()
{
    var editButton = navigationBar.leftButton();
    var messagePlus = "Edit button";
    if (editButton.isValid) {
        UIALogger.logPass(messagePlus);
    } else {
        UIALogger.logError(messagePlus);
    }
}