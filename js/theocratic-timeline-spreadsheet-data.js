// ID of the Google Spreadsheet
//var spreadsheetID = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSSCQs1hliIllaCUgZR_fA-S6hOKmYW6zwRlhKEscvxd3CcFeAnSZbKygFf0UDX0ifWJfVDLouSLWPq/pub?output=ods";
var spreadsheetID = "1sLUkeBQ8432kjTNhj-LXyZkCa82L1OnZZ4ESnHCsVUQ";

// Make sure it is public or set to Anyone with link can view
var url =
    "https://spreadsheets.google.com/feeds/list/" +
    spreadsheetID +
    "/od6/public/values?alt=json";

// Please make sure that the vis.jw timeline library is loaded before this file.
function loadDataFromSpreadsheet(timelineDates) {
    // Load from excel
    $.getJSON(url, function (data) {
        var entry = data.feed.entry;
        var i = 0;

        $(entry).each(function () {
            // Start and end date handling
            var startSpreadSheetValue = data.feed.entry[i]["gsx$start"]["$t"];
            var startDate = null;
            if (startSpreadSheetValue) {
                startDate = new Date(startSpreadSheetValue);
            }

            var endSpreadSheetValue = data.feed.entry[i]["gsx$end"]["$t"];
            var endDate = null;
            if (endSpreadSheetValue) {
                if (endSpreadSheetValue == "Today") {
                    endDate = new Date();
                } else {
                    endDate = new Date(endSpreadSheetValue);
                }
            } else {
                endDate = new Date();
            }

            // Styling

            var period = data.feed.entry[i]["gsx$period"]["$t"];
            var style = "";
            var openDate = data.feed.entry[i]["gsx$opendate"]["$t"];

            if (period == "Modern history") {
                style = "modern-history";
            } else if (period == "Before Jesus") {
                style = "before-jesus";
            } else if (period == "Jesus") {
                style = "jesus-earth";
            }

            if (openDate == "Open start") {
                style = style + " open-start";
            } else if (openDate == "Open end") {
                style = style + " open-end";
            } else if (openDate == "Open start and end") {
                style = style + " open-start-end";
            }

            timelineDates.add({
                id: i + 1,
                title: data.feed.entry[i]["gsx$title"]["$t"],
                content: data.feed.entry[i]["gsx$content"]["$t"],
                type: data.feed.entry[i]["gsx$type"]["$t"],
                start: startDate,
                startCaption: data.feed.entry[i]["gsx$startcaption"]["$t"],
                end: endDate,
                endCaption: data.feed.entry[i]["gsx$endcaption"]["$t"],
                imageUrl: data.feed.entry[i]["gsx$imageurl"]["$t"],
                referenceUrl: data.feed.entry[i]["gsx$referenceurl"]["$t"],
                notes: data.feed.entry[i]["gsx$notes"]["$t"],
                className: style
            });
            i++;
        });
    });
}
