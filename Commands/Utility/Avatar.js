const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class Avatar extends Command {
    constructor() {
        super("avatar", {
            aliases: ["avatar"],
            args: [
                {
                    id: "user",
                    type: "user"
                }
            ]
        })
    }

    exec(message, args) {
        if (args.user) {
            const uEmbed = new MessageEmbed()
            .setAuthor(args.user.tag, args.user.avatarURL({"format": "png"}))
            .setImage(args.user.avatarURL({"size": 2048}))
            .setColor(this.client.colors.blank)
            .setFooter(`Requested by ${message.author.tag} at`)
            .setTimestamp()
            message.channel.send(uEmbed)
        } else {
            const mEmbed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({"format": "png"}))
            .setImage(message.author.avatarURL({"size": 2048}))
            .setColor(this.client.colors.teal)
            .setFooter(`Requested by ${message.author.tag} at`)
            .setTimestamp()
            message.channel.send(mEmbed)
        }
    }
}

module.exports = Avatar;