import * as coin from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));
args['number'];
const number = args.number;

if (number == null) {
    let flip = coin.coinFlips(1);

    if (flip == ['heads']) {
        console.log('{ heads: 1 }');
    } else {
        console.log('{ tails: 1 }');
    }
} else {
    let flip = coin.coinFlips(number);
    console.log(flip);
    console.log(coin.countFlips(flip));
}
