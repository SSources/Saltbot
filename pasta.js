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
const config = require("./config.json");
const superagent = require("superagent");
const clientId = config.id;
const {
    send
} = require("process");
const date = require("date")

client.on('ready', function () {
    console.log('First confirmation');
    for (flopped = 0; flopped < 69; flopped++) {
       console.log(chalk.red("Connecting to servers..."))
    }
});

client.on('error', e => {
    console.error(e)
});



console.clear()

client.on('error', (e) => {console.error(e)});
client.on('ready', ()  => {
  console.clear()
  process.title = "ReNewSelf v1";
  client.user.setActivity(`ll`, {type: 4})
    console.log(chalk.greenBright("SelfClient démarré."))
})
client.on("message", async message => {
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let sender = message.author;
    const argsm = message.content.split(' ');
    const searchString = argsm.slice(1).join(' ');
    const url = argsm[1] ? argsm[1].replace(/<(.+)>/g, '$1') : '';
    var guild = message.guild;
    let id = config.id;


// GIFT //

    
  
if(command === prefix + 'gift') {
    if(message.author.id === id) {
    fs.readFile('accounts/nitrogen.txt', function(err, data) {
      if(err) throw err;
      data = data + '';
      var lines = data.split('\n');
      let random = lines[Math.floor(Math.random()*lines.length)];
    
      message.channel.send(`https://discord.gift/${random}`);
    
    })
}else{
    console.log(chalk.blueBright("Quelqu'un a essayer d'utiliser vos commandes ! L'utilisateur en a été automatiquement empêché."));
}
}

// STATUS COMMANDS //

if(command === prefix + "listen"){
    if(message.author.id === id) {
    message.delete()

    client.user.setActivity("" + args.join(" "), {type: "LISTENING"});
    }else{
        console.log(chalk.blueBright("Quelqu'un a essayer d'utiliser vos commandes ! L'utilisateur en a été automatiquement empêché."));
    }
}


if(command === prefix + "watch"){
    if(message.author.id === id) {
    message.delete()

    client.user.setActivity("" + args.join(" "), {type: "WATCHING"});
    }else{
        console.log(chalk.blueBright("Quelqu'un a essayer d'utiliser vos commandes ! L'utilisateur en a été automatiquement empêché."));
    }
}


if(command === prefix + "play"){
    if(message.author.id === id) {
    message.delete()

    client.user.setActivity("" + args.join(" "), {type: "PLAYING"});
    }else{
        console.log(chalk.blueBright("Quelqu'un a essayer d'utiliser vos commandes ! L'utilisateur en a été automatiquement empêché."));
    }
}


if(command === prefix + "stream"){
    if(message.author.id === id) {
    message.delete()

    client.user.setActivity("" + args.join(" "), {type: "STREAMING", url:"https://www.twitch.tv/monstercat"});
    }else{
        console.log(chalk.blueBright("Quelqu'un a essayer d'utiliser vos commandes ! L'utilisateur en a été automatiquement empêché."));
    }
    
    
}


});

client.login(config.token);