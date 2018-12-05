// Ensure that the timeline library has been loaded
// Ensure that the data file has also been loaded

function timelineOnSelect() {
  var selectedId = timeline.getSelection()[0];
  var selectedItem = timeline.itemsData.get(selectedId);

  document.getElementById("details-header").innerHTML =
    selectedItem.content || "Click an event to see the details here...";
  document.getElementById("details-start-date").innerHTML =
    selectedItem.startCaption || formatTimelineDate(selectedItem.start);
  document.getElementById("details-end-date").innerHTML =
    selectedItem.endCaption || formatTimelineDate(selectedItem.end);
  document.getElementById("details-reference").href =
    selectedItem.referenceUrl || "#";
  document.getElementById("details-notes").innerHTML = selectedItem.notes || "";
  document.getElementById("details-image").src =
    selectedItem.imageUrl || "images/noimage.jpg";
}

function formatTimelineDate(date) {
  if (!date) {
    return "";
  }

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  var printDate = new Date(date);

  var dateString = "";

  var year = printDate.getFullYear();
  if (year < 0) {
    printDate.setFullYear(date.getFullYear() + 1); // For printing, there seems to be some problem with dates going off by 1 year when the date is BCE
  }

  dateString = printDate.toLocaleDateString("en-EN", options);

  if (year < 0) {
    dateString = dateString + " B.C.E";
  }

  return dateString;
}

function formatMinorLabel(date, scale, step) {
  var year = date.format("YYYY");
  var yearLabel = "";
  var monthLabel = "";
  var dayLabel = "";

  if (year < 0) {
    year = year * -1;
    yearLabel = " BCE";
  }

  yearLabel = year.toString().replace(/^0+/, "") + yearLabel;
  monthLabel = date.format("MMMM");
  dayLabel = date.format("dd") + ", " + date.format("Do");

  if (scale == "year") {
    return yearLabel;
  }
  if (scale == "month") {
    return monthLabel;
  }
  if (scale == "day") {
    return dayLabel;
  }

  return scale;
}

function formatMajorLabel(date, scale, step) {
  var year = date.format("YYYY");
  var yearLabel = "";
  var monthLabel = "";
  var dayLabel = "";

  if (year < 0) {
    year = year * -1;
    yearLabel = " BCE";
  }

  yearLabel = year.toString().replace(/^0+/, "") + yearLabel;
  monthLabel = date.format("MMMM");
  dayLabel = date.format("dd") + ", " + date.format("Do");

  if (scale == "year") {
    return yearLabel;
  }
  if (scale == "month") {
    return yearLabel;
  }
  if (scale == "day") {
    return monthLabel + " " + yearLabel;
  }

  return scale;
}
