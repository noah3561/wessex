const { Command } = require("discord-akairo");
const { MessageEmbed } = require("discord.js");

class ServerStats extends Command {
    constructor() {
        super("serverstats", {
            aliases: ["serverstats", "sstats", "guildstats", "gstats"]
        });
    };

    async exec(message) {
        try {
            await message.guild.members.fetch()
        } catch(e) {}
        const totalMembers = message.guild.memberCount;
        const onlineMembers = message.guild.members.filter(member => member.user.presence.status == "online").size;
        const idleMembers = message.guild.members.filter(member => member.user.presence.status == "idle").size;
        const dndMembers = message.guild.members.filter(member => member.user.presence.status == "dnd").size;
        const offlineMembers = message.guild.members.filter(member => member.user.presence.status == "offline").size;
        const humanMembers = message.guild.members.filter(member => !member.user.bot).size;
        const botMembers = message.guild.members.filter(member => member.user.bot).size;
        const tChannel = message.guild.channels.filter(channel => channel.type == "text").size;
        const vChannel = message.guild.channels.filter(channel => channel.type == "voice").size;
        const cChannel = message.guild.channels.filter(channel => channel.type == "category").size;
        const hoistTotal = message.guild.roles.filter(role => role.hoist).size;
        const hiddenTotal = message.guild.roles.filter(role => !role.hoist).size;
        const embed = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({"format": "png"}))
        .setThumbnail(message.guild.iconURL({"format": "png", "size": 2048}))
        .setColor(this.client.colors.teal)
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()
        .addField("Member Stats", `**╠═** Total Members: **${totalMembers}**\n**╠═** Total Humans: **${humanMembers}**\n**╠═** Total Bots: **${botMembers}**\n**╠═** Total Online: **${onlineMembers}**\n**╠═** Total Idle: **${idleMembers}**\n**╠═** Total DND: **${dndMembers}**\n**╚═** Total Offline: **${offlineMembers}**`, false)
        .addField("Channel Stats", `**╠═** Text Channels: **${tChannel}**\n**╠═** Voice Channels: **${vChannel}**\n**╚═** Categories: **${cChannel}**`, false)
        .addField("Role Stats", `**╠═** Hoisted Roles: **${hoistTotal}**\n**╚═** Hidden Roles: **${hiddenTotal}**`, false)

        message.channel.send(embed)
    };
};

module.exports = ServerStats;