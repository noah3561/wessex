const { ShardingManager } = require("discord.js");
const { token } = require("./Tokens.js");
const sm = new ShardingManager("./Client.js", { token });
sm.spawn();
