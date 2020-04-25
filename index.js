var chart = c3.generate({
  bindto: "#chart",
  data: {
    url: "/tour_data.json",
    type: "line",
    axis: {
      x: {
        type: "categorized",
      },
    },
  },
});
