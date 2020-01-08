var amqp = require('amqplib/callback_api');
// 1.Create Connection
amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }

      //2.Create Channel
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }


        //3.Assert Queue
        var queue = 'hello';
        var msg = 'Hello World!';


        
        channel.assertQueue(queue, {
            durable: false
        });

          //4.Send Message to Queue
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(function () {
        connection.close();
        process.exit(0);
    }, 500);
});