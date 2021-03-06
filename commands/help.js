const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;

    let embedMsg = new Discord.RichEmbed()
        .setColor("#42f4bf")
        .addField("?help", "View this page.", true)
        .addField("?getrole", "Get a character's role.", true)
        .addField("?hello", "Get those mean replies.", true)
        .addField("?ily", "Get those mean replies, part 2.", true)
        .addField("?setprefix", "Modifies bot prefix.", true);

    channel.send(embedMsg).then(embedMsg => {
        embedMsg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
    });
}

module.exports.help = {
    name: "help"
}