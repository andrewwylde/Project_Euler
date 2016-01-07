'use strict';

function doShit() {
  var a, b, c;
  for (let i = 1; i < 1000; i++) {
    a = i;
    for (let j = 1; j < 1000; j++) {
      b = j;
      c = Math.sqrt(a*a + b*b);
      if (c%1 === 0 && a+b+c === 1000) {
        return a*b*c;
      }
    }
  } 
}

module.exports = function(){
  return doShit();
};
