/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {

    let myMap = new Map();


    cpdomains.forEach(domain => {
        const domainArr = domain.split(" ");
        const number = parseInt(domainArr[0]);
        const domains = domainArr[1].split('.');

        while (domains.length) {
            const domain = domains.join('.');

            if (myMap.has(domain)) {
                const currentNumber = myMap.get(domain);
                myMap.set(domain, (currentNumber + number));
            } else {
                myMap.set(domain, number);
            }
            domains.shift();
        }
    });
    const output = [];

    for (let [key, val] of myMap) {

        output.push(`${val} ${key}`);

    }
    return output;
};


console.log(subdomainVisits(["9001 discuss.leetcode.com"]));

console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));