// Require the Channel handler
const ChannelRabbit = require('./connection');
const actions = require('./actions');

const queue = 'general';

// Read inconming messages
ChannelRabbit(queue, actions.readMessage);
