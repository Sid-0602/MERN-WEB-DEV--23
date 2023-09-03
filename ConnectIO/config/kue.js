const kue = require('kue');
const queue = kue.createQueue(); //this creates queues for processes.


module.exports = queue; 
