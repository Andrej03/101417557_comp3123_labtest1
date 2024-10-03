const fs = require('fs');
const path = '../question3';

// log files made in the directory ../question3 were made with a function found on the nodejs resource page provided.
// for loop was an idea example from one of the labs. 

for(let i = 0; i < 10; i++) {
fs.writeFile(`${path}/log${i}.txt`, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
});
}