const discord = require('discord.js');
require('dotenv').config();
const TOKEN = process.env.TOKEN;

const client = new discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on('ready', () => {
    console.log(`Loggined as ${client.user.tag}`)
})

client.login(TOKEN)

client.on("messageCreate", (message) => {
    if (message.content === "start ping"){
        for(let i = 0; i < 200; i++){
            message.reply("@everyone ping")
        }
    }
    if(message.content === "oç" || message.content === "oç bot"){
        for(let i = 0; i < 20; i++){
            message.reply("@everyone ping")
        }
    }
    if(message.content.indexOf('gay') !== -1){
        message.reply("birinin eş cinsel olduğunu söyleyen eş cinseldir")
    }
    if(message.content.toLowerCase().indexOf('sik') !== -1 || message.content.toLowerCase().indexOf('amk') !== -1 || message.content.toLowerCase().indexOf('anan') !== -1 || message.content.toLowerCase().indexOf('aptal') !== -1 || message.content.toLowerCase().indexOf('mal') !== -1 || message.content.toLowerCase().indexOf('top') !== -1 || message.content.toLowerCase().indexOf('mal') !== -1 || message.content.toLowerCase().indexOf('oç') !== -1){
        message.delete()
    }
})