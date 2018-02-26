const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((entry) => {
      if (entry != 'read-files.js')
        console.log(entry);
  });

});
