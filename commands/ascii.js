var figlet = require('figlet');

exports.run = (client, message, args) => {

var maxLen = 14

if(args.join(' ').length > maxLen) return console.log(chalk.red('Seulement 14 caractères'))

if(!args[0]) return message.channel.send('Testez ascii');

figlet(`${args.join(' ')}`, function(err, data) {
    if(err) {
        console.log(err)
        console.dir(err);
        return;
    }

    message.channel.send(`${data}`, {code: 'AsciiArt'});
});

}

module.exports.help = {
    name: "ascii"
}

