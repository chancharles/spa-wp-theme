define(["lodash"], function (_) {
    return {
      render: function () {
        var body = document.getElementsByTagName("body")[0];
        body.innerHTML = _.escape("Congratulation, your site is configured successfully ");
      }
    };
  }
);
