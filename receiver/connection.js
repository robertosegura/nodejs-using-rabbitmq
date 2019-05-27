const amqp = require('amqplib/callback_api');

// This should be a package to be shared between sender & receiver
module.exports = (queue, callback, message) => {
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

            callback(channel, queue, message);
        });
    });
};