// Ensure that the vis.jw timeline library is loaded before this file.
var items = new vis.DataSet([
  {
    id: 1,
    content: "Kenneth Kook Jr. appointed to the GB",
    start: new Date("2018-01-24"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/kencook.jpg",
    referenceUrl:
      "https://www.jw.org/en/publications/magazines/watchtower-study-january-2019/new-member-governing-body/"
  },
  {
    id: 2,
    content: "Dedication of the new WHQ",
    start: new Date("2017-10-07"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/warwick.jpg"
  },
  {
    id: 3,
    content: "Guy Pierce finishes his earthly course",
    start: new Date("2014-03-18"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/guypierce.jpg",
    referenceUrl:
      "https://www.jw.org/en/publications/magazines/w20141215/guy-pierce-governing-body-dies/"
  },
  {
    id: 4,
    content: "Release of the revised NWT",
    start: new Date("2013-10-05"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/nwt13release.jpg"
  },
  {
    id: 5,
    content: "President: Frederick W. Franz",
    start: new Date("1977-06-22"),
    end: new Date("1992-12-22"),
    className: "modern-history",
    imageUrl: "images/franz.jpg"
  },
  {
    id: 6,
    content: "Mark Sanderson appointed to the GB",
    start: new Date("2012-01-09"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/marksanderson.jpg"
  },
  {
    id: 7,
    content: "President: Nathan H. Knorr",
    start: new Date("1942-01-13"),
    end: new Date("1977-06-08"),
    className: "modern-history",
    imageUrl: "images/knorr.jpg"
  },
  {
    id: 8,
    content: "President: J.F. Rutherford",
    start: new Date("1917-01-06"),
    end: new Date("1942-01-08"),
    className: "modern-history",
    imageUrl: "images/rutherford.jpg"
  },
  {
    id: 9,
    content: "Adopted name Jehovah's Witnesses",
    start: new Date("1931-07-26"),
    type: "point",
    className: "modern-history",
    imageUrl: "images/jwconventionameprogram.jpg"
  },
  {
    id: "10",
    content: "President: C. T. Rusell",
    notes: "Some other comments here",
    referenceUrl: "www.jw.org",
    imageUrl: "images/rusell.jpg",
    start: new Date("1884-01-01"),
    startCaption: "c. 1884 Watchtower Society legally formed",
    end: new Date("1916-10-31"),
    className: "modern-history open-start"
  },
  {
    id: "11",
    content: "Destruction of Jerusalem",
    imageUrl: "images/jerusalemdestroyed.jpg",
    start: new Date("-000607-06-30"),
    startCaption: "Tammuz 9, 607 B.C.E (June-July)",
    referenceUrl:
      "https://wol.jw.org/en/wol/d/r1/lp-e/1200003200#h=7:601-7:1488",
    type: "point",
    className: "before-jesus"
  },
  {
    id: "12",
    content: "Daniel",
    start: new Date("-000625-01-01"),
    end: new Date("-000525-01-01"),
    className: "before-jesus open-start-end",
    imageUrl: "images/daniel.jpg"
  },
  {
    id: "13",
    content: "Jesus",
    imageUrl: "",
    start: new Date("-000002-10-01"),
    end: new Date("0033-04-01"),
    className: "jesus-earth"
  },
  {
    id: "14",
    title: "Gen. 2:7 - 930 years",
    content: "Adam",
    start: new Date("-004026-10-01"),
    startCaption: "4.026 B.C.E, possibly October 1st",
    end: new Date("-003096-01-01"),
    endCaption: "3.096 B.C.E",
    className: "before-jesus"
  },
  {
    id: "15",
    title: "Gen. 5:3,8 - 912 years",
    content: "Seth",
    start: new Date("-003896-01-01"),
    startCaption: "3.896 B.C.E",
    end: new Date("-002984-01-01"),
    endCaption: "2.984 B.C.E",
    className: "before-jesus"
  },
  {
    id: "16",
    content: "Cain slays Abel",
    start: new Date("-003896-01-01"),
    startCaption: "b. 3.896 B.C.E",
    type: "point",
    className: "before-jesus"
  }
]);
