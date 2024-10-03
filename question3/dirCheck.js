const fs = require('fs');
const path = '../question3';

// readdir was taken from the nodejs resource page provided for us.
fs.readdir(path, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});
