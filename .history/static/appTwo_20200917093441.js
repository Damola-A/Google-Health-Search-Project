// Defnintion of what should be aviable on our webpage when running app.py
function selectInit() {

    // LOCATION NAME FOR COMPARISON 1 AND 2
    // Importing data from all records
    d3.json("/allsearchrecord").then((importData) => {
        // Searching location through 
        var names = importData.data;