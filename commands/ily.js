const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var replies = new Array();
    replies.push("That's what I like to hear.");
    replies.push("I know that.");
    replies.push("Nani?!");
    replies.push("I can't help you with that.");

    var r = Math.floor(Math.random() * replies.length);

    let channel = message.channel;
    let reply = replies[r];

    channel.send(reply);
}

module.exports.help = {
    name: "ily"
}