const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
// require('dotenv').config();
let text = require('./const');
const bot = new Telegraf('5742419595:AAE6D6Z-etTX8WCPpiNtyxivaNPzqYItCTY');
// bot.start((ctx) =>
//   ctx.reply(
//     `  Привет ${ctx.message.from.first_name}!.
//     Пришлите текст для размещение обьявение на канале
// `
//     // Markup.keyboard([
//     //   ['Условие работы', 'График работы'],
//     //   ['Способы оплаты', 'Наш сайт'],
//     //   ['Телефон', 'Помощь'],
//     // ])
//     //   .resize()
//     //   .extra()
//   )
// );

bot.command('start', (ctx) => {
  ctx.reply('Здравствуйте! Я — бот ресторана Хинкали VS Бургеры. Чем я могу быть полезен?', {
    reply_markup: Markup.keyboard([
      ['Забронировать стол', 'Меню ресторана'],
      ['Режим работы', 'Контакты'],
      ['Скидка 20%'],
    ]),
  });
});

bot.hears('Забронировать стол', (context) => {
  context.reply(`Уточните, пожалуйста:

  — Дату
  — Время
  — Количество персон
  — Ваше имя
  — Контактный номер телефона`);
});

bot.hears('Меню ресторана', (context) => {
  context.reply(`Меню ресторана:

  https://hvsb.ru/restaurant-menu.html
  `);
});
bot.hears('Режим работы', (context) => {
  context.reply(`Режим работы:
  с 11-00 до 23-00
  с 11:00 до 01:00 пт-сб`);
});

bot.hears('Контакты', (context) => {
  context.reply(`Контакты:
  8 (800) 600-93-16
  `);
});

bot.hears('Скидка 20%', (context) => {
  context.reply(
    `🔥Ваш промокод на скидку 20% на основное меню - SPECIAL20

  Покажите это сообщение официантам и наслаждайтесь.
  
  Код действителен в тeчeние 2х недель с мoмeнта пoлучения, по будням с 12 до 16 часов 🙂
  
  Резерв стола обязателен - забронировать стол для вас?
  `,
    {
      reply_markup: Markup.inlineKeyboard([[Markup.callbackButton('Да', 'da')]]),
    }
  );
});

bot.on('text', (www) => {
  www.reply(`Спасибо! Я уже передал ваши данные хостес.
       В ближайшее время с вами свяжутся для подтверждения резерва.
       Прекрасного дня!`);
});

bot.action('da', (ctx) => {
  ctx.reply(`Уточните, пожалуйста:

  — Дату
  — Время
  — Количество персон
  — Ваше имя
  — Контактный номер телефона`);
});

bot.launch().then(() => {
  console.log('Бот Запущен');
});

// bot.on('text', (www) => {
//   bot.telegram.sendMessage(www.update.message.chat.id, www.update.message.text);
//   console.log(www.update.message.text);
// });

// else {
//   www.reply(
//     `Спасибо! Я уже передал ваши данные хостес.
//     В ближайшее время с вами свяжутся для подтверждения резерва.
//     Прекрасного дня!`
//   );
// }
