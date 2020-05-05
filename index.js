require('dotenv').config();
var fs = require('fs');
const fetch = require("node-fetch");


module.exports = (directory) => {
    let API_URL = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200504T232731Z.331202c40646801e.6cbac3d503a20f8873ee4072b4bc7045f171f1b9`
    
    fs.readdir(directory, function(err, filenames) {
        if (err) {
            console.log(err);
            return;
        }
        filenames.forEach(function(filename) {
            fs.readFile(directory + filename, 'utf8', function(err, content) {
                if (err) {
                    console.log(err);
                    return;
                }

                // isolate language from file name
                const lang = filename.split('.')[0];
                
                // generate new locale
                let output = {};

                // translate all individual entries
                Object.entries(JSON.parse(content)).map(entry => {
                    fetch(API_URL + `&text=${entry[0]}&lang=${lang}`)
                    .then( response => response.json())
                    .then( data => output[entry[1]] = data.text[0]).then(() => {
                        // save new file to disk
                        fs.writeFileSync(directory + filename, JSON.stringify(output))
                    });
                })
            });
            console.log(`${filename} succesfully saved: ${directory}${filename}`);
        })
    })
}