// var fs = require('fs');

// fs.writeFile('data.txt', 'Hello World!', function (err) { 
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });

// var fs = require('fs');

// fs.writeFile('data.txt', 'Hello World!2', function (err) { 
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });

//The second content overrides the previous one

var fs = require('fs');

fs.appendFile('data.txt', 'Hello World!', function (err) { 
                        if (err)
        console.log(err);
                        else
        console.log('Append operation complete.');
});