const Discord = require("discord.js");
const { Client, RichEmbed, Util } = require('discord.js');
const client = new Discord.Client({
  disableEveryone: true
});
const embed = new Discord.RichEmbed()

const fs = require("fs");
const {
    get,
    link
} = require("snekfetch");
const snekfetch = require("snekfetch");
const chalk = require("chalk");
const prefix = require("./config.json");
const config = require("./config.json");
const superagent = require("superagent");
const {
    send
} = require("process");
const date = require("date")

client.on('ready', function () {
    console.log('First confirmation');
    for (flopped = 0; flopped < 69; flopped++) {
        client.user.setActivity("Pasta Box", {
            type: "STREAMING",
            url: "https://www.twitch.tv/enotishka18"
        });
        console.log(chalk.yellow("wohoooo selfbot ready!!!"));
    }
});

client.on('error', e => {
    console.error(e)
});

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  
  });

client.on("message", async message => {
    let prefix = flopping.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let sender = message.author;
    const argsm = message.content.split(' ');
    const searchString = argsm.slice(1).join(' ');
    const url = argsm[1] ? argsm[1].replace(/<(.+)>/g, '$1') : '';
    var guild = message.guild;

    if(command === prefix + 'gift') {
        fs.readFile('accounts/nitrogen.txt', function(err, data) {
          if(err) throw err;
          data = data + '';
          var lines = data.split('\n');
          let random = lines[Math.floor(Math.random()*lines.length)];
        
          message.channel.send(`https://discord.gift/${random}`);
        
        })
        
              }

});

client.login(config.token);