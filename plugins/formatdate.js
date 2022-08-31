import Vue from "vue";

Vue.filter("formatDate", (dateStr) =>
  Intl.DateTimeFormat("en-GB").format(new Date(dateStr))
);