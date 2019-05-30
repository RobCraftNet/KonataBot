const Command = require('../../structures/BaseCommand');

class gasmCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'gasm',
            desc: 'gasm a user!',
            category: 'nsfw',
            nsfwOnly: true,
            examples: [
                '{prefix}gasm',
            ],
            cooldown: 5
        });
    }

    async execute(msg, args) {
        const neko = await this.bot.snek.get('https://nekos.life/api/v2/img/gasm');

        if (!msg.mentions[0]) {
            msg.channel.createMessage({ 
            content: ` here is your gasm:`,
            embed: {
                image: {
                    url: neko.body.url
                },
                color: this.bot.utils.color
            }});
        }
    }
}

module.exports = gasmCommand;