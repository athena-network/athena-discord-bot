require('dotenv').config();
const client = require('./core/client');
const fs = require("fs");
const messageHandler = require('./core/message-handler');

client.on('message', messageHandler);

client.login(process.env.DISCORD_TOKEN);