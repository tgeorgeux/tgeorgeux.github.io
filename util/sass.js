var sass = require('node-sass');
sass.render({
  file: '../sass/index.scss'
}, function(err, result) {
  if(err) err;
  console.log(result);
});