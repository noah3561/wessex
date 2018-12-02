const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class UserInfo extends Command {
    constructor() {
        super("userinfo", {
            aliases: ["userinfo", "user", "ui"]
        })
    }

    // **╚═**
    // **╠═**

    exec(message, args) {

        
        const member = message.mentions.members.first() || message.member;
        const status = member.user.presence.status == "online" ? "Online" : member.user.presence.status == "idle" ? "Idle" : member.user.presence.status == "dnd" ? "DND" : "Offline"
        const activity = member.user.presence.activity == "null" ? "None" : member.user.presence.activity
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({"format": "png"}))
        .setThumbnail(message.guild.iconURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Account Info", `**╠═** User Tag **${member.user.tag}**\n**╠═** User ID **${member.user.id}**`, false)
    }
}

module.exports = UserInfo;