const { Command } = require("discord-akairo")

class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["ping"]
        })
    }

    exec(message) {
        const startTime = Date.now();
        message.channel.send(`Pinging...`).then(msg => {
            const endTime = Date.now();
            msg.edit(`Pong! | Client Ping: ${endTime - startTime}ms | API Latency: ${Math.floor(this.client.pings[0])}ms`);
        });
    }
}

module.exports = Ping;