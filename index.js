const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "";//البرفكس حق البوت | Bot Prefix
client.login(process.env.TOKEN)

const probot = require("probot-tax");
client.on("message", message => {
  if(!message.guild) return;
    if(message.content.startsWith( prefix + 'tax')) {//tax command | امر الضريبة
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('من فضلك اكتب المبلغ المراد دفعه ')
    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      {
      name:"`المبلغ المراد دفعه : `", value:`**${args}**`
 
    },
    {
      name:"`المبلغ بالضريبة :  `", value:`**${probot.taxs(args)}**`
 
    },
    
 
    )
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
 
        message.channel.send(embed)
    }
});
