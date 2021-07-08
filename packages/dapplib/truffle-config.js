require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food shock remember punch protect hidden produce army gasp'; 
let testAccounts = [
"0x93b1300d0f2a089c1623aad19f09246a9326e674ebd305c0e673fa09c192914e",
"0x16de699aa6f10dbead7d7efe030a993dd49a76856e263086d45f363fc25d39c4",
"0xb299353d51851894f59be877f9de1d112cd78bf505f91b27af7b719e7cc8fbf8",
"0xea7d54a1c13b6bcfcd5d51ac542c40fa2f20b5730b532b4e3331efdbbcdb634d",
"0xd4b155c909fbdeed8a111673ce546d3ad041487854848cd39ce63b2769e7409d",
"0x5afbda668fbb20e1805c6fd130633f4bf284d61d382a0a0aaa7cd112d0ca3c90",
"0xb8a11ecc022ab64713372c26c509f13a4f78d718a29b56c0afef8b08d3216786",
"0xc5628551870ba8f545d01899364ba6d3a75dcb3ee495237fb36af8a3f9619cbe",
"0x8a1ab2a439b5486309fa06182c90136df6fe963fa46dc3218badb9690fd9aa05",
"0x5fcd488b16287873bca43ccdb740e4840a5155ebd8a608850d7027c996f35b64"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

