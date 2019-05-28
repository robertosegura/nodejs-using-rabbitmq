// Require the Channel handler
const yargs = require('yargs');
const ChannelRabbit = require('./connection');
const actions  = require('./actions');

const queue = 'general';

yargs.command({
    command: 'emit',
    describe: 'Emit a new message',
    builder: {
        message: {
            describe: 'New message',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => ChannelRabbit(queue, actions.sendMessage, argv.message)
}).argv;
