exports.sendMessage = (channel, queue, msg) => {
    // Channel configuration
    channel.assertQueue(queue, {
        durable: false
    });

    // Sending message
    channel.sendToQueue(queue, Buffer.from(msg));

    console.log(`[x] Sent: "${msg}" to queue: "${queue}"`);
}