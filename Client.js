const { AkairoClient, ListenerHandler, CommandHandler } = require("discord-akairo");
const path = require("path");
const { token } = require("./Tokens.js")

class Client extends AkairoClient {
	constructor() {
		super({
			ownerID: "187771864435785728"
		},
		{
			disableEveryone: true
		});
	
	this.commandHandler = new CommandHandler(this, {
		directory: path.join(__dirname, "Commands"),
		prefix: "w!"
    });
    
    this.listenerHandler = new ListenerHandler(this, {
        directory: path.join(__dirname, "Listeners")
    })
    this.listenerHandler.setEmitters({
        commandHandler: this.commandHandler
    })
    
    this.listenerHandler.loadAll();
	this.commandHandler.useListenerHandler(this.listenerHandler);
	this.commandHandler.loadAll();
	this.colors = {
		"red": 0xFF0000,
		"green": 0x00FF00,
		"yellow": 0xFFFF00,
		"orange": 0xFFA500,
		"teal": 0x00FFFF,
		"blank": 0x36393E
	};
	this.constants = {
        "botInvite": "https://discordapp.com/oauth2/authorize?&client_id=461984672944095233&scope=bot&permissions=8"
	};
	
	}
	
	convertTime(t) {
        const ms = parseInt((t) % 1000);
        const absoluteSeconds = parseInt((t / (1000)) % 60);
        const absoluteMinutes = parseInt((t / (1000 * 60)) % 60);
        const absoluteHours = parseInt((t / (1000 * 60 * 60)) % 24);
        const absoluteDays = parseInt((t / (1000 * 60 * 60 * 24)));

        const d = absoluteDays > 0 ? absoluteDays === 1 ? "1 day" : `${absoluteDays} days` : null;
        const h = absoluteHours > 0 ? absoluteHours === 1 ? "1 hour" : `${absoluteHours} hours` : null;
        const m = absoluteMinutes > 0 ? absoluteMinutes === 1 ? "1 minute" : `${absoluteMinutes} minutes` : null;
        const s = absoluteSeconds > 0 ? absoluteSeconds === 1 ? "1 second" : `${absoluteSeconds} seconds` : null;

        const absoluteTime = [];
        if (d) absoluteTime.push(d);
        if (h) absoluteTime.push(h);
        if (m) absoluteTime.push(m);
        if (s) absoluteTime.push(s);
        if (ms) absoluteTime.push(ms + " milliseconds");

        return absoluteTime.join(", ");
    }
	
	cFL(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
    }
    
    async randomFromImgurAlbum(album) {
        const { body } = await request
          .get(`https://api.imgur.com/3/album/${album}`)
          .set({ Authorization: `Client-ID ${imgur}` });
        if (!body.data.images.length) return null;
        return body.data.images[Math.floor(Math.random() * body.data.images.length)].link;
      }
}

const client = new Client();
client.login(token);