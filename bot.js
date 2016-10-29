const Discord = require("discord.js");
const bot = new Discord.Client();
const request = require("request");
const ytdl = require("ytdl-core");
nconf = require("nconf");

//youtube
bot.on('message', message => {
	if(message.content.startsWith('!play')) {
		var input = message.content.substring(6)

		const voiceChannel = message.member.voiceChannel;
		voiceChannel.join()
			.then(connection => {
				const audio = connection.playStream(ytdl(input), {volume: "0.25"});
				audio.on('end', () => {
					voiceChannel.leave();
				});
			});
	}
});


// Bot login
nconf.file({file:"options.json"})
bot.on("ready", function(message) {
	console.log("Ready for orders!")
})
console.log("Logging in...");

bot.login(nconf.get("BotToken")).then(success).catch(err);

function success(token){
	console.log("Success!")
}

function err(error){
	console.log("Error logging in")
}
