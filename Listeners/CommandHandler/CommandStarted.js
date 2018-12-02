const { Listener } = require("discord-akairo");

class CommandStartedListener extends Listener {
    constructor() {
        super("commandStartedListener", {
            emitter: "commandHandler",
            event: "commandStarted"
        });
    };


    exec(message, command) {
        if (message.guild) console.log(`${message.author.tag} (${message.author.id}) issued guild command ${this.client.commandHandler.prefix}${command} in ${message.guild.name} (${message.guild.id}), #${message.channel.name}`);
        else console.log(`${message.author.tag} (${message.author.id}) issued DM command ${this.client.commandHandler.prefix}${command}`);
    };
};

module.exports = CommandStartedListener;