const fs = require('fs');

fs.writeFile('uusitiedosto.txt', 'Moikka maailma!', function (err) {
  if (err) throw err;
  console.log('Talletettu!');
});