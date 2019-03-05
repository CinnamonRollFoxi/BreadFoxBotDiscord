const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client, {
            name: 'kick',
            group: 'admin',
            memberName: 'admin',
            description: 'Kicks a player you want to kick!'
        });
    }

    async run(message, args)
    {
       let kickedUser = message.guild.member(message.mentions.users.first());
       if(!kickedUser)
       {
            message.channel.send("Sorry, user was not found!");
            return;
       }
       if(!message.member.hasPermission('ADMINISTRATOR'))
       {
            message.channel.send("You do not have permission to run this command.");
            return;
       }
       let words = args.split(' ');
       let reason = words.slice(1).join(' ');
       message.guild.member(kickedUser).kick(reason)
        .then(console.log)
        .catch(console.error);
    }
}


module.exports = KickCommand;