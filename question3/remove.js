const fs = require('fs');
const path = '../question3';

// log files made in the directory ../question3 were made with a function found on the nodejs resource page provided.
// for loop was an idea example from one of the labs. 
// same for logic was used to make and remove the folders in the directory.
for (let i = 0; i < 10; i++) {
fs.unlink(`${path}/log${i}.txt`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });
}
