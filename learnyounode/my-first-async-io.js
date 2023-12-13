const fs = require('fs')

fs.readFile(process.argv[2], function callback(err, data){
    if(err){
        console.log("Error while reading file", err)
        return;
    }

    const str = data.toString()

    const numofNL = (str.match(/\n/g) || []).length

    console.log(numofNL)
})

