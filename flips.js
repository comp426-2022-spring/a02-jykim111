import * as coin from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['number'];
const number = args.number;

if (number == null) {
    let flip = coin.coinFlips(1);
    console.log(flip);
    if (flip == ['heads']) {
        console.log('{ heads: 1 }');
    } else {
        console.log('{ tails: 1 }');
    }
} else {
    let randomFlip = coin.coinFlips(number);
    randomFlip = randomFlip.filter(function (entry) {
        return entry.trim() != '';
    });
    console.dir(randomFlip, { 'maxArrayLength': null });
    console.log(coin.countFlips(randomFlip));
}
