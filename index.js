var chart = c3.generate({
  bindto: "#chart",
  data: {
    url: "/tour_data.json",
    type: "line",
    axis: {
      x: {
        type: "category",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
  },
});
