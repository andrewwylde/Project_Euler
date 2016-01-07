var prompt = require('prompt');

prompt.message = 'Problem #'.blue;
prompt.start();
prompt.get({
  properties: {
    name: {
      description: 'Which problem number do you want to test?'.magenta
    }
  }
}, function (err, result) {
  console.log( 'Running Problem '.cyan + result.name.cyan + '... '.cyan );
  console.log('./p' + result.name);
  var probNum = require( './p' + result.name );
  console.log(probNum());
});
