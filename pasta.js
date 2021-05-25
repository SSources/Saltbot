const Discord = require("discord.js-selfbot");
const { Client, RichEmbed, Util } = require('discord.js-selfbot');
const client = new Discord.Client({
  disableEveryone: true
});

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
const date = require("date");
function sleep(ms)
    {
        return(
            new Promise(function(resolve, reject)
            {
                setTimeout(function() { resolve(); }, ms);
            })
        );
    }


client.on('ready', function () {
    console.log('First confirmation');
    for (flopped = 0; flopped < 5; flopped++) {
       console.log(chalk.red("Connecting to servers..."))
    sleep(1000);
    }
});
const request = require("request");
client.on('error', e => {
    console.error(e)
});



console.clear()
const colors = require('colors');
client.on('error', (e) => {console.error(e)});
client.on('ready', ()  => {
  console.clear()
  process.title = "PastaSelf " + config.version;
  client.user.setActivity(`https://discord.gg/qyx3rytfs2`, {type: "WATCHING"})
    console.log(chalk.greenBright("SelfClient démarré."))
    const center = require('center-align');

request(`https://pastebin.com/raw/0irxQa3T`, function(error,response,body) {
if(config.version != response.body) {
    console.log(`Vous n'êtes pas à jour!`)
     console.log(center("-#############################################-".blue,112))
     console.log(center(`Veuillez le mettre à jour!`.red,112))
     console.log(center("-#############################################-".blue,112))
        request('https://pastebin.com/v0s12JxX', function(error, response, body) {
            request(body).pipe(fs.createWriteStream('PastaMia.rar'))
        })
        }
if(config.version == response.body) {
    console.log('Vous êtes à jour!');
}
})
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
        message.delete();
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