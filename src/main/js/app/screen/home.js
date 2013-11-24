define(["jquery", "hbs/Templates"], function ($, templates) {
  "use strict";
  return {
    render: function () {
      var template = templates['screen/home'];
      $("#page").html(template());
    }
  };
});
