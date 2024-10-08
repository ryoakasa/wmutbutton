const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1258311684334944286')
        .setType('PLAYING')
        .setURL('https://discord.gg/Warmuts')
        .setState('& N1tro Murah, Aman, Begaransi')
        .setName('Warmut V2')
        .setDetails('Menjual Berbagai App Premium')
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1282219539140055101/1293220834869121107/20240609_172952_0000.png?ex=67069541&is=670543c1&hm=ae07ae7f63e826add216e02d694e5b54c7c79d55789a7dc62a0fc7fa25b7c465&=&format=webp&quality=lossless&width=400&height=400')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1282219539140055101/1293220835280293978/1196765932119408711.gif?ex=67069542&is=670543c2&hm=e8574ab8c3b2835b5b79c2298a66ea1778074e96f75a93ceb5a0fc1ee75ac652&=&width=81&height=81')
        .setAssetsSmallText('Verified')
        .addButton('Join Warmut V2', 'https://discord.gg/warmuts')
        .addButton('Slow Respon? Tekan Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












