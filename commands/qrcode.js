const Discord = require("discord.js");
const tempy = require("tempy");
const qrcode = require("qrcode");
const chalk = require("chalk");


module.exports.run = async (bot, message, args) => {
const qrOutput = tempy.file({ extension: "png" });
message.channel.startTyping();
if (args.length > 0) {
    qrcode.toFile(qrOutput, args.join(" "), { margin: 1}, (error) => {
        if (error) throw new Error(error);
        message.channel.stopTyping();
        message.channel.send({
            files: [{
                attachment: qrOutput,
                name: "qr.png"
            }]
        });
    });
}else {
    message.channel.stopTyping();
    console.log(chalk.red("Tu as besoin de mettre un texte."));
}


}

module.exports.help = {
    name: "qrcode"
}