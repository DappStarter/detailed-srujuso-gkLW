require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remind hour install father fresh tenant'; 
let testAccounts = [
"0xc9e8e4af04d9fa9ca21b2244b3454430c6e6c10114044d72fda530f17772808d",
"0x6aed656060ec4544dae9937655f2bd44b04d78060853187360b07460912068ae",
"0xe09635180672dbcab0bcc45fa5ec1b9a140c611b8789ecb43372179dd18e4814",
"0x3f3661a730f394b3248d6dcd0b4febf0a37218d81ae21e43ed4d4904f2c82d29",
"0xfd1d1ca2105110ed63cb9cbe79d27365807212efae9fbd734b65d7ea651e271a",
"0xc12e53d0203578016acacf9fad19b4452d761f6b541d452f444f9e4ea7a8081e",
"0x5dbedf9f03390b4e02769ac0cd24c2eb2a8e47b093d1ec797d316334fbca5584",
"0x30d785ab3af08b8ee199f480eed73b06e8b59d89b6f6aa3f79722cc2e65f0a90",
"0xeadaa6961f7fcb18314c60d632859e3bbd701ff11b46651d9a5f7cafb6c59c0b",
"0x2eb81e35a4b5c3adf1c6f57b38fbca042c77543d003ff821e56c62f96c6139b8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

