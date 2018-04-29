const Discord = require("discord.js");
const botconfig = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
    let channel = message.channel;

    if (args[0]) {
        var roles = ["Reiji", "Ranmaru", "Camus", "Ai", "Otoya", "Cecil", "Masato", "Ren", "Natsuki", "Syo", "Tokiya"];
        if (roles.contains(args[0])) {
            let member = message.member;

            if (!member.roles.some(role => roles.includes(role.name))) {
                message.delete();
                
                let role = message.guild.roles.find("name", args[0]);
                member.addRole(role);

                let msg = "Role has been given.";
                channel.send(msg).then(msg => {
                    msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
                });
            } else {
                message.delete();

                let msg = "You may only have one role.";
                channel.send(msg).then(msg => {
                    msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
                });
            }
        } else {
            message.delete();

            let msg = `Unknown role.\nPlease note that roles are case-sensitive.`;
            channel.send(msg).then(msg => {
                msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
            });
        }
    } else {
        message.delete();

        let msg = `Insufficient arguments.\nUsage: ?getrole <role name>`;
        channel.send(msg).then(msg => {
            msg.delete(10000).catch(err => console.log(`An error has occured: \n` + err));
        });
    }

}

module.exports.help = {
    name: "getrole"
}

Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}
