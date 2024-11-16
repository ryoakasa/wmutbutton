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
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1284020923888046130/1307250093287673917/20240609_172952_0000.png?ex=67399f05&is=67384d85&hm=9dce26357e8159f21b6519c3481a8cad2cbb9bb79400d80c2113230d8a41c00d&=&format=webp&quality=lossless&width=400&height=400')
        .setAssetsLargeText('Testimoni 850+')
        .setAssetsSmallImage('https://media.discordapp.net/attachments/1284020923888046130/1307250093627281448/1196765932119408711.gif?ex=67399f05&is=67384d85&hm=e4abdac532e3a9774925288932dae4fbee317bd1c2edfeb2db4f00018fc23e26&=&width=81&height=81')
        .setAssetsSmallText('Verified')
        .addButton('Server Warmut V2', 'https://discord.gg/warmuts')
        .addButton('Slow Res? Klik Ini', 'https://wa.me/6283102229967');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);












