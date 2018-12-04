const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const moment = require("moment-timezone")

class UserInfo extends Command {
    constructor() {
        super("userinfo", {
            aliases: ["userinfo", "user", "ui"],
            clientPermissions: ["EMBED_LINKS"]
        })
    }

    // **╚═**
    // **╠═**

    exec(message) {      
        const member = message.mentions.members.first() || message.member;
        const status = member.user.presence.status == "online" ? "Online" : member.user.presence.status == "idle" ? "Idle" : member.user.presence.status == "dnd" ? "DND" : "Offline"
        const activity = member.user.presence.activity ? this.client.cFL(member.user.presence.activity.name) : "None";
        const joinDate = moment(member.joinedAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz")
        const creationDate = moment(member.user.createdAt).tz("America/Chicago").format("dddd, MMMM Do, YYYY [at] h:mm A zz")
        const roleList = message.guild.members.get(member.id).roles.array().sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role).join(" ");
        const embed = new MessageEmbed()
        .setAuthor(member.user.tag, member.user.avatarURL({"format": "png"}))
        .setThumbnail(member.user.avatarURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Account Info", `**╠═** User Tag **${member.user.tag}**\n**╠═** User ID **${member.user.id}**\n**╠═** User Status **${status}**\n**╠═** User Activity **${activity}**\n**╠═** Guild Join Date **${joinDate}**\n**╚═** Account Creation Date **${creationDate}**`, false)
        .addField(`Roles [**${message.guild.members.get(member.id).roles.size - 1}**]`, roleList.replace("@everyone", " "), false)

        message.channel.send(embed)
    }
}

module.exports = UserInfo;