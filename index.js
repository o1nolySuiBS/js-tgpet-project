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
                    [{text: 'Заповнити форму', web_app:{url: webAppUrl + 'form'}}]
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
    if(msg.web_app_data?.data) {
        try{
            const data = JSON.parse(msg.web_app_data?.data)

           await bot.sendMessage(chatId, 'Дякую!');
           await bot.sendMessage(chatId, 'Ваша країна:' + data?.country);
           await bot.sendMessage(chatId, 'Ваша вулиця:' + data?.street);

           setTimeout(async ()=>{
               await bot.sendMessage(chatId, 'Всю інформацію ви отримаєте в цьому чаті');
           }, 2000)

        }catch (e){
            console.log(e)
        }

    }
})