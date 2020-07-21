const axios = require('axios');

const delay = sec => new Promise(resolve => {
    setTimeout(resolve, sec * 1000);
});

const getTimeStamp = () => (Date.now() / 1000 | 0)
const sequentialExec = async () => {

    console.log('starting..', + new Date());
    await delay(1);

    console.log('waiting..', Date.now() / 1000 | 0);

    await delay(1);

    process.stdout.write("\x07");
    console.log('starting fetch operation', Date.now() / 1000 | 0
    );

    await fetch('https://api.jsonbin.io/b/5ec4d4fb18c8475bf16cb6f2/1');
    console.log('fetch done', Date.now() / 1000 | 0);
    const data = await fetch('https://api.jsonbin.io/b/5ec4d4fb18c8475bf16cb6f2/1');
    console.log(data.data, Date.now() / 1000 | 0
    );

    console.log('start Promize All...')
    let cur = getTimeStamp();
    await Promise.all([delay(5), delay(2), delay(3)])
    await Promise.all([delay(1), delay(2), delay(3)])
    Promise.all([delay(5), delay(2), delay(3)])

    console.log('time taken for promoze.all', (getTimeStamp() - cur));
};

sequentialExec();