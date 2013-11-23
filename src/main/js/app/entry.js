define(["lodash", "jquery"], function (_, $) {
  return {
    render: function () {
      $("#page").html(_.escape("Congratulation, your site is configured successfully"));
    }
  };
});
