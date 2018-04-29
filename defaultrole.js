const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;

    if (message.member.hasPermission("ADMINISTRATOR")) {
        if (args[0]) {
            let role = message.guild.roles.find("name", args[0]);
            if (role) {
                botconfig.default_role = args[0];

                channel.send(`Default role has been changed to "` + args[0] + "\".");
            } else {
                let msg = `Role does not exist.`;
                channel.send(msg).then(msg => {
                    msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
                });
            }
        } else {
            let msg = `Insufficient arguments.\nUsage: ?defaultrole <role name>`;
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
    name: "defaultrole"
}