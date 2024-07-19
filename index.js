const TelegramBot = require('node-telegram-bot-api');

const token = '6853339273:AAE7_4pVIPkCXaLeYdK48jikOD-f05OpWAc'
const webAppUrl = 'https://silver-cheesecake-436994.netlify.app/';
const bot = new TelegramBot(token, {polling: true})

bot.on('message', async(msg)=>{
    const chatId = msg.chat.id
    const text = msg.text;


    if(text === '/start'){
        await bot.sendMessage(chatId, 'Нижче появиться кнопка, заповни форму', {
            reply_markup:{
                keyboard:[
                    [{text: 'Заповнити форму', web_app:{url: webAppUrl + '/form'}}]
                ]
            }
        })

    await bot.sendMessage(chatId, 'Це магазин, роби замовлення', {
            reply_markup:{
                inline_keyboard: [
                    [{text: "зробити замовлення", web_app:{url: webAppUrl}}]
                ]
            }
        })
    }
    bot.sendMessage(chatId, 'Received tour message')
})