var probNum;
var prompt = require('prompt');

// prompt.message = "Problem #";

prompt.message = "Problem #".blue;

prompt.start();

prompt.get({
  properties: {
    name: {
      description: "Which problem number do you want to test?".magenta
    }
  }
}, function (err, result) {
  console.log( "Running Problem ".cyan + result.name.cyan + '... ' );
  var probNum = require( './p' + result.name );
  probNum();
});
