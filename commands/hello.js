const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var replies = new Array();
    replies.push("Huh, I'm busy now.");
    replies.push("Not available now, maybe later?");

    var r = Math.floor(Math.random() * replies.length);

    let channel = message.channel;
    let reply = replies[r];

    channel.send(reply);
}

module.exports.help = {
    name: "hello"
}