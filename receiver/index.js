// Require the library for Rabbitmq
const amqp = require('amqplib/callback_api');

// rabbitmq comes from the internal network of docker-compose
amqp.connect('amqp://rabbitmq', (error, connection) => {
    // Check if connection is alive
    if (error) {
        throw error;
    }
    connection.createChannel((err, channel) => {
        // Check if channel was created
        if (err) {
            throw err;
        }

        var queue = 'general';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, (msg) => {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});