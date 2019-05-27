// Require the Channel handler
const ChannelRabbit = require('./connection');
const actions  = require('./actions');

const queue = 'general';
const msg = "Mesage from refactor";

ChannelRabbit(queue, actions.sendMessage, msg);
