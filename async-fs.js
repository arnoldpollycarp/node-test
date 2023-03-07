const { readFile, writeFile } = require('fs')

readFile("./content/first.txt", 'utf8',(error, result) => {
    if (error) {
        console.log(error)
        return
    }
    
    first = result;

    writeFile("./content/async-fs.txt", `here is the result: ${first}`,(error, result) => {
        if (error) {
            console.log(error)
        }
    })
})

