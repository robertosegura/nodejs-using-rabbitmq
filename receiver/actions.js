exports.readMessage = (channel, queue) => {
    // Channel configuration
    channel.assertQueue(queue, {
        durable: false
    });

    console.log(`[*] Waiting for messages in "${queue}". To exit press CTRL+C`);

    // Reading new messages
    channel.consume(queue, (msg) => {
        console.log(`[x] Received "${msg.content.toString()}"`);
    }, {
        noAck: true
    });
}