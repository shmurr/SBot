var Discord = require("discord.js");
var bot = new Discord.Client();
var lenny = require("lenny");
var request = require("request");
var ytdl = require("ytdl-core");
nconf = require("nconf");

bot.on("message", function(message) {

	var input = message.content.toLowerCase();

	if(input === "hello")
	{
		bot.reply(message, "Hi!");
	}
	if(input === "!exit")
	{
		console.log("Disconnecting...");
		process.exit(1);
	}
	if(input === "!uptime") {
		bot.reply(message, (bot.uptime)/1000 + " " + "Seconds")
	}
	if(input === "!kappa") {
		if(Math.random() > 0.5) {
			bot.sendFile(message.channel, "http://res.cloudinary.com/urbandictionary/image/upload/a_exif,c_fit,h_200,w_200/v1395991705/gjn81wvxqsq6yzcwubok.png").then(success);

			function success(kappa) {
				console.log(message.author + " " + "Just won a Kappa!")
			}
		}
		else {
			bot.sendMessage(message.channel, "No Kappa for you!")
		}
	}
	if(input.startsWith("!setchannelname")) {
		input = input.substring(16);
		bot.setChannelName(message.channel, input, err => {
			if (err) console.log(err);
			else bot.sendMessage(message.channel, "Channel name set to" + " " + input);
		});
	}
	if(input === "!lennyface") {
		var i = Math.floor((Math.random()*lenny.faces.length));
		bot.sendMessage(message.channel,lenny.faces[i]);
	}
	if(input === "!faggot") {
		bot.sendMessage(message.channel, "Did you mean !OlePetter?");
	}
	if(input === "!feelsgood") {
		bot.sendFile(message.channel, "http://memesvault.com/wp-content/uploads/Feels-Good-Man-Frog-06.png")
	}
	if(input === "!feelsbad") {
		bot.sendFile(message.channel, "https://openclipart.org/image/2400px/svg_to_png/222252/feels.png")
	}
	if(input === "!sheit") {
		bot.sendFile(message.channel, "http://i0.kym-cdn.com/entries/icons/original/000/010/669/421566_110052819134743_1827862103_n.jpg")
	}
	if(input === "!???") {
		bot.sendFile(message.channel, "http://i0.kym-cdn.com/photos/images/facebook/000/993/875/084.png")
	}
})
bot.on("message", function(message) {

	var input = message.content.toLowerCase();

	if(input.startsWith("!blame")) {
		nconf.file({file:"blame.json"})
		var input = input.substring(7)

		if(input === "armand") {
			nconf.load();
			var armandBlame = nconf.get("armandBlame");
			nconf.set("armandBlame",armandBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Armand has been blamed" + " " + armandBlame + " " + "times for this garbage!")
		}

		if(input === "op") {
			nconf.load();
			var olepetterBlame = nconf.get("olepetterBlame");
			nconf.set("olepetterBlame",olepetterBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Ole Petter has been blamed" + " " + olepetterBlame + " " + "times for this garbage!")
		}

		if(input === "erling") {
			nconf.load();
			var erlingBlame = nconf.get("erlingBlame");
			nconf.set("erlingBlame",erlingBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Erling has been blamed" + " " + erlingBlame + " " + "times for this garbage!")
		}

		if(input === "oliver") {
			nconf.load();
			var oliverBlame = nconf.get("oliverBlame");
			nconf.set("oliverBlame",oliverBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Oliver has been blamed" + " " + oliverBlame + " " + "times for this garbage!")
		}

		if(input === "nikita") {
			nconf.load();
			var nikitaBlame = nconf.get("nikitaBlame");
			nconf.set("nikitaBlame",nikitaBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Nikita has been blamed" + " " + nikitaBlame + " " + "times for this garbage!")
		}

		if(input === "oa") {
			nconf.load();
			var oleandreasBlame = nconf.get("oleandreasBlame");
			nconf.set("oleandreasBlame",oleandreasBlame + 1);
			nconf.save();
			nconf.load();
			bot.sendMessage(message.channel, "Ole Andreas has been blamed" + " " + oleandreasBlame + " " + "times for this garbage!")
		}
	}
})
// audio test

bot.on("message", function(message) {

	if(message.content === "!datboi") {

		bot.joinVoiceChannel(message.author.voiceChannel, function(error, con) {

			if(error) console.log(error);

			else bot.voiceConnection.playFile("audio/datboi.mp3", function(err, intent) {

				if(err) console.log(err);

				else intent.on("end", () => {

					bot.leaveVoiceChannel(message.author.voiceChannel)
				})
			});
		});
	}
})
new
// youtube

bot.on("message", function(message) {
	var input = message.content

	if(input.startsWith("!play")) {

		input = input.substring(6)

		bot.joinVoiceChannel(message.author.voiceChannel).then(function (connection) {

			console.log("playing music for" + "" + message.author)

			connection.playRawStream(ytdl(input), {volume: "0.25"}, function(err, intent) {

				if(err) console.log(err);

				else intent.on("end", () => {

					bot.leaveVoiceChannel(message.author.voiceChannel)
				})
			})
		})
	}
})
// audio test

bot.on("message", function(message) {

	if(message.content === "!datboi") {

		bot.joinVoiceChannel(message.author.voiceChannel, function(error, con) {

			if(error) console.log(error);

			else bot.voiceConnection.playFile("/Users/ArmandG/Desktop/SBot/audio/datboi.mp3", function(err, intent) {

				if(err) console.log(err);

				else intent.on("end", () => {

					bot.leaveVoiceChannel(message.author.voiceChannel)
				})
			});
		});
	}
})

// youtube

bot.on("message", function(message) {
	var input = message.content

	if(input.startsWith("!play")) {

		input = input.substring(6)

		bot.joinVoiceChannel(message.author.voiceChannel).then(function (connection) {

			console.log("playing music for" + "" + message.author)

			connection.playRawStream(ytdl(input), {volume: "0.25"}, function(err, intent) {

				if(err) console.log(err);

				else intent.on("end", () => {

					bot.leaveVoiceChannel(message.author.voiceChannel)
				})
			})
		})
	}

	if(input === "!stop") {

		bot.voiceConnection.stopPlaying()
		bot.leaveVoiceChannel(message.author.voiceChannel)
	}
})

// Bot login
nconf.file({file:"options.json"})
bot.on("ready", function(message) {
	console.log("Ready for orders!")
})
console.log("Logging in...");

bot.loginWithToken(nconf.get("BotToken")).then(success).catch(err);

function success(token){
	console.log("Success!")
}

function err(error){
	console.log("Error logging in")
}
