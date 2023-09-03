const queue = require('../config/kue');

const commentsMailer = require('../mailers/comments_mailers');

//process function: 
queue.process('emails',function(job,done){
    console.log('emails worker is processing the job', job.data);

    commentsMailer.newComment(job.data);
    done();
})