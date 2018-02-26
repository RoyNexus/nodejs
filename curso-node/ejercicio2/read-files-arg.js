
const fs = require('fs');

exports.readFiles = function(directory) {

  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    var result = [];

    files.forEach((entry)  => {
        if (entry != 'read-files.js')
          result.push(entry);
    });

    return result;

  });
}
