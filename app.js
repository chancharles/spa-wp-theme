var connect = require('connect');

var app = connect()
  .use(connect.static('src/main'))
  .listen(3000);
