
{
    let i = [1, 2, 3, 4];


    let iterator = i[Symbol.iterator]();

    console.log(iterator.next())

    for (const x of i) {
        console.log(x)
    }

}
{
    function* gen() {
        yield `from gen function 11`;
        yield 22;
    }

    const iterator = gen();

    console.log(iterator.next())
}
{
    console.log("========= Infinate Maker ----------------")

    function* infinateMaker() {

        let i = 0;

        while (true) {
            yield i;
            i++;
        }

        return 'stop'; // will never get executed
    }

    const iterator = infinateMaker();

    console.log('from infinate maker', iterator.next().value);
    console.log('from infinate maker', iterator.next().value);
    console.log('from infinate maker', iterator.next().value);
}

{

    function makePromise(status, time = 2000) {

        const promise = new Promise((resolve, reject) => {
            // console.log('new promise created');
            setTimeout(() => {
                // console.log('timeout complete', time)
                status ? resolve('success') : reject('Promise rejected');
            }, time);
        });

        return promise;
    }


    function* gen() {

        yield makePromise(true, 3000);
        yield makePromise(true, 1500);

        yield makePromise(false, 5000);
        yield makePromise(true);

    }
    async function asyncFun() {
        console.log('======= Promise Generator Example -------')

        const iterator = gen();

        try {

            let x = await iterator.next().value;
            console.log(x);
            let xy = await iterator.next().value;
            console.log(xy);
            let xz = await iterator.next().value;
            console.log(xz);
            let xx = await iterator.next().value;
            console.log(xx);

        } catch (e) {
            console.log('error', e)
        }
    }
    // asyncFun();


    async function waitForAll() {
        console.log('-------- Wait for All ------------')

        const iterator = gen();
        // console.log(iterator.next())
        await Promise.race(gen()).then((b) => console.log(b, 'race'));

        Promise.allSettled(gen()).then(() => console.log('all Settled')).catch(e => console.log(e))
        Promise.race(gen()).then((b) => console.log(b, '2race'));

        // console.log(a, 'ss');
        // console.log(b)
    }

    waitForAll()
}