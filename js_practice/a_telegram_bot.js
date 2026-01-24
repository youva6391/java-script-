const TelegramBot = require('node-telegram-bot-api');

// Apna token yahan daalo
const token = "8208036224:AAEIsd9qeELHTZfWFV_7kdgHOfJ3IdLL8Os";

// Bot create with polling
const bot = new TelegramBot(token, { polling: true });

// Listen for messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    // Ignore messages from other bots
    if (msg.from.is_bot) return;

    // Clean user input: remove extra spaces & lowercase
    const text = msg.text.trim().toLowerCase();

    // Commands & Replies
    if (text === "/start") {
        bot.sendMessage(chatId, "Chal teri aukat nahi bot chalane ka 😎");
    } 
    else if (text === "hello") {
        bot.sendMessage(chatId, "App kese hye 😁");
    } 
    else if (text === "main thik hu") {
        bot.sendMessage(chatId, "Ye to acchi baat hye 👌\nApne khana khaya ya nahi?");
    } 
    else if (text === "hn") {
        bot.sendMessage(chatId, "Vese kya kya khaya, mujhe bhi batao 🍽️");
    } 
    else if (text === "food") {
        // Inline buttons
        bot.sendMessage(chatId, "Kya khaya aaj?", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Roti", callback_data: "roti" },
                        { text: "Rice", callback_data: "rice" },
                        { text: "Pizza", callback_data: "pizza" }
                    ]
                ]
            }
        });
    } 
    else {
        bot.sendMessage(chatId, "Sorry 😅, main samajh nahi paaya");
    }
});

// Handle button clicks
bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const chatId = msg.chat.id;
    const data = callbackQuery.data;

    if (data === "roti") {
        bot.sendMessage(chatId, "Roti! Healthy choice 😋");
    } else if (data === "rice") {
        bot.sendMessage(chatId, "Rice! Classic choice 🍚");
    } else if (data === "pizza") {
        bot.sendMessage(chatId, "Pizza! Yummy 😎");
    }

    // Remove buttons after click
    bot.editMessageReplyMarkup({ inline_keyboard: [] }, { chat_id: chatId, message_id: msg.message_id });
});
