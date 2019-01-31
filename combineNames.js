const fs = require('fs');

var newFile = 'fullName.txt'
var path1 = './firstName.txt';
var path2 = './lastName.txt';
var firstTxt = ' ';
var lastTxt = ' ';

var options = {encoding: 'utf8', flag: 'a+'};

fs.readFile(path1, options, (err, data) => {
  if (err) throw err;
  firstTxt = data;
  fs.appendFile(newFile, firstTxt, options, (err) => {
    if (err) throw err;
    console.log('Filen är sparad')
  })
});

fs.readFile(path2, options, (err, data) => {
  if (err) throw err;
  lastTxt = data;
  fs.appendFile(newFile, lastTxt, options, (err) => {
    if (err) throw err;
    console.log('Filen är sparad')
  })
});
