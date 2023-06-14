import IMask from 'imask';

const phoneMask = IMask(
    document.getElementById('phone-mask'), {
        mask: '+{7} (000) 000-00-00'
    });

const telegramMask = IMask(
    document.getElementById('telegram-mask'), {
        mask: `@abc`,
        blocks: {
            abc: {
                mask: /^\w+$/,
            }
        }
    });
