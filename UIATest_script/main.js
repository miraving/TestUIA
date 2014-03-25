UIALogger.logMessage("Initialization");
var target = UIATarget.localTarget();
var app = target.frontMostApp();
var navigationBar = app.navigationBar();
var window = app.mainWindow();
var tableView = window.tableViews()[0];

UIALogger.logStart("Start: Add new row");
UIALogger.logMessage("+ tap button");
var plusButton = navigationBar.rightButton();
plusButton.tap();
UIALogger.logPass("End: Add new row");

UIALogger.logStart("Start: Remove cell");
UIALogger.logMessage("Edit tap button");
var editButton = navigationBar.leftButton();
editButton.tap();

var deleteSwitch = tableView.cells()[0].switches()[0];
deleteSwitch.tap();

var deleteButton = tableView.cells()[0].buttons()[0];
deleteButton.tap();

UIALogger.logMessage("Done tap button");
editButton.tap();
UIALogger.logPass("End: Remove cell");


UIALogger.logMessage("End APP");