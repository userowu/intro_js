
array = ['mother', 'bunny', 'prom', 'chocolate']
var arrayLen = array.length;

function randSentence() {
  return 'my ' + array[Math.random(0, arrayLen)] + ' ' + 'stopped working because his ' + array[Math.random(0, arrayLen)] + ' stepped on the ' + array[Math.random(0, arrayLen)];
}

console.log(randSentence());
