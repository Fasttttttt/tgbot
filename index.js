const TelegramApi = requiere('node-telegram-bot-api')


const token = '7090243597:AAEfoSvwsZeQ8gsQNTC9X_2DkTQAu9KU_9Y'

const bot = new TelegramApi(token, {polling:true})


bot.on('messege', msg=>{
    console.log(msg)
})