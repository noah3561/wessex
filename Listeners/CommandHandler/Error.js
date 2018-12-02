const { Listener } = require("discord-akairo");

class ErrorListener extends Listener {
    constructor() {
        super("errorListener", {
            emitter: "commandHandler",
            event: "error"
        });
    };

    exec(error, message) {
        return message.channel.send(`There was an internal error running this command\`\`\`js\n${error.stack || e}\n\`\`\``);
    };
};

module.exports = ErrorListener;