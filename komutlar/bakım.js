const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()
  .setColor("BLACK")
  .setTitle('Vira ROLEPLAY BAKIM')
  .setDescription('Sunucumuza bakım yapılacaktır lütfen giriş yapmayınız. Giriş yaptığınız taktirde oluşacak olan sorunlardan sorumlu değiliz.')
  .setImage('https://cdn.discordapp.com/attachments/839604463358705664/890678621197455360/vira_bakm.gif')

  message.channel.send('||@everyone|| ||@here||',{embed});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bakım",],
  permLevel: 2,
  kategori:"genel"
};

exports.help = {
  name: 'bakım',
  description: 'Sunucu bakım komutu',
  usage: '.bakım'
};