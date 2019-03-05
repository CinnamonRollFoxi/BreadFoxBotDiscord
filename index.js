const Commando = require('discord.js-commando');
const prefix = ";";
const bot = new Commando.Client({
    commandPrefix: prefix
});
const token = 'NTQ3NTY1MTgzMTcwNjQxOTIx.D04n_w.rO8DkfTKLRzlMn4wOHFL9w0Sdn4'

// Commands

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

//Testing Command, the first ever command!

bot.on('message', function(message){
    if(message.content == 'BreadFox')
    {
        message.channel.sendMessage('Hello ' + message.author + '.');
    }
});

//Console and Activity things

bot.on('ready', function(){
    console.log('Ready for use Captain!');

    bot.user.setActivity('with a piece of toast.'); //The Great Toast
});

bot
    .on('guildCreate', console.log)
    .on('guildDelete', console.log);

bot.on('message', function(message){
    if(message.content == 'Howdy')
    {
        message.channel.sendMessage('https://cdn.discordapp.com/attachments/397564595759349760/547593817130401792/image0.png');
    }
});


bot.login(token);