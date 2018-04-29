const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    let channel = message.channel;
    let prefix = botconfig.prefix;

    let embedMsg = new Discord.RichEmbed()
        .setColor("#42f4bf")
        .addField(`${prefix}help`, "View this page.", true)
        .addField(`${prefix}getrole`, "Get a character's role.", true)
        .addField(`${prefix}hello`, "Huh, get those mean replies.", true)
        .addField(`${prefix}setprefix`, "Modifies bot prefix.", true);

    channel.send(embedMsg).then(embedMsg => {
        embedMsg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
    });
}

module.exports.help = {
    name: "help"
}
