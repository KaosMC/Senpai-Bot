const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({
  disableEveryone: true
});

const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Could not find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`Loaded command from ${f}.`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", async () => {
  console.log("Senpai-Bot is now online!")
  bot.user.setActivity(`${botconfig.activity}`);
});

bot.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;

  let msgArray = message.content.split(" ");
  let cmd = msgArray[0];
  let args = msgArray.slice(1);

  let prefix = botconfig.prefix;

  let helloCmd = prefix + "hello";
  let getRoleCmd = prefix + "getrole";
  let setPrefixCmd = prefix + "setprefix";
  let defaultRoleCmd = prefix + "defaultrole";
  let helpCmd = prefix + "help";

  if (cmd === helloCmd | cmd === getRoleCmd | cmd === setPrefixCmd | cmd === defaultRoleCmd | cmd === helpCmd) {
    let cmdFile = bot.commands.get(cmd.slice(prefix.length));
    cmdFile.run(bot, message, args);
  }

});

bot.on("guildMemberAdd", (member) => {
  let memberRole = member.guild.roles.find("name", `${botconfig.default_role}`);
  member.addRole(memberRole).catch(console.error);
});

bot.login(process.env.BOT_TOKEN);
