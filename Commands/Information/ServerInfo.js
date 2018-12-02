const { Command } = require("discord-akairo")
const { MessageEmbed } = require("discord.js")

class ServerInfo extends Command {
    constructor() {
        super("serverinfo", {
            aliases: ["serverinfo", "server", "si", "guild", "guildinfo", "gi"]
        })
    }

    exec(message) {

        const guildLevel = message.guild.verificationLevel == 0 ? "None" : message.guild.verificationLevel == 1 ? "Low" : message.guild.verificationLevel == 2 ? "Medium" : message.guild.verificationLevel == 3 ? "(╯°□°）╯︵ ┻━┻" : message.guild.verificationLevel == 4 ? "┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻" : "Unknown"
        const guildRegion = message.guild.region == "brazil" ? "Brazil" : message.guild.region == "eu-central" ? "Central Europe" : message.guild.region == "hongkong" ? "Hong Kong" : message.guild.region == "japan" ? "Japan" : message.guild.region == "russia" ? "Russia" : message.guild.region == "singapore" ? "Singapore" : message.guild.region == "sydney" ? "Sydney" : message.guild.region == "us-central" ? "US Central" : message.guild.region == "us-east" ? "US East" : message.guild.region == "us-west" ? "US West" : message.guild.region == "us-south" ? "US South" : message.guild.region == "eu-west" ? "Western Europe" : message.guild.region == "southafrica" ? "South Africa" : "Unknown"
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({"format": "png"}))
        .setThumbnail(message.guild.iconURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Guild Info:", `**╠═** Name: **${message.guild.name}**\n**╚═** ID: **${message.guild.id}**`, false)
        .addField("Owner Info:", `**╠═** Tag: **${message.guild.owner.user.tag}**\n**╚═** ID: **${message.guild.owner.id}**`, false)
        .addField("Guild Stats:", `**╠═** Region: **${guildRegion}**\n**╠═** Verification Level: **${guildLevel}**\n**╠═** Roles: **${message.guild.roles.size}**\n**╠═** Channels: **${message.guild.channels.size}**\n**╚═** Members: **${message.guild.memberCount}**`, false)

        message.channel.send({ embed })
    }
}

module.exports = ServerInfo;