const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var replies = new Array();
    replies.push("I'm busy.");
    replies.push("Don't you have anything better to do?");
    replies.push("Hey yourself.");
    replies.push("Maybe talk to the hundreds of other humans in this server.");

    var r = Math.floor(Math.random() * replies.length);

    let channel = message.channel;
    let reply = replies[r];

    channel.send(reply);
}

module.exports.help = {
    name: "hello"
}
