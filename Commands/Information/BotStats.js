const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");
const discord = require("discord.js")
const akairo = require("discord-akairo")
const moment = require("moment-timezone")
const fetch = require("node-superfetch")

class BotStats extends Command {
    constructor() {
        super("botstats", {
            aliases: ["botstats", "bstats", "stats"]
        })
    }

        // **╚═**
    // **╠═**

    exec(message) {
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({"format": "png"}))
        .setThumbnail(message.guild.iconURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Statistical Information", `**╠═** Total Members **${this.client.users.size}**\n**╠═** Total Channels **${this.client.channels.size}**\n**╠═** Total Guilds **${this.client.guilds.size}**\n`, false)
        .addField("Module Information", `**╠═** Discord.js **${discord.version}**\n**╠═** Akairo **${akairo.version}**\n**╠═** Node.js **${process.version}**\n**╠═** Moment Timezone **${moment.version}**\n**╚═** Node Superfetch **${fetch.version}**`)
    }
}