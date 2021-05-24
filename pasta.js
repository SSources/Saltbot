let Discord = require('discord.js');
let client = new Discord.Client();
const {
    Client,
    Attachment
} = require('discord.js');

const fs = require("fs");
const {
    get,
    link
} = require("snekfetch");
const snekfetch = require("snekfetch");
const chalk = require("chalk");
const prefix = require("./config.json");
const flopping = require("./config.json");
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


    
});
