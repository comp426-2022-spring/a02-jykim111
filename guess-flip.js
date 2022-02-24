import * as coin from "./modules/coin.mjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));
args['call'];

const call = args.call;

if (call == null || call == "" || call != 'tails' || call != 'heads') {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[head|tails]");
} else {
    console.log(coin.flipACoin(call));
}