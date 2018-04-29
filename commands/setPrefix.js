const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let channel = message.channel;

    if (message.member.hasPermission("ADMINISTRATOR")) {
        if (args[0]) {
            botconfig.prefix = args[0];

            channel.send(`Prefix has been changed to "` + args[0] + "\".");
        } else {
            let msg = `Insufficient arguments.\nUsage: ?setprefix <prefix>`;
            channel.send(msg).then(msg => {
                msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
            });
        }

    } else {
        let msg = `Insufficient permissions.`;
        channel.send(msg).then(msg => {
            msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
        });
    }

}

module.exports.help = {
    name: "setprefix"
}
