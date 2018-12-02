const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class Avatar extends Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar"]
        })
    }

    exec(message) {
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({"format": "png"}))
        .setImage(message.author.avatarURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        message.channel.send(embed)
    }
}

module.exports = Avatar;