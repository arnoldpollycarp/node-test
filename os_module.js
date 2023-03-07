const os = require('os')

// current user information
const user = os.userInfo()

//  system uptime
console.log(`your computer has been up for ${os.uptime} seconds`);