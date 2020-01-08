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

        var queue = 'hello';
//3.Assert Queue
        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

 //4.Receive Message to Queue
        channel.consume(queue, function (msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});