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
        var msg = 'Hello World!';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    });
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
});