require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note praise pull install indoor flower gaze'; 
let testAccounts = [
"0x44adc8d5213ab2b5f62231b04aee2c3bd53f348025633ee73883c6791e83649b",
"0x6cab504ebcdd309086106ffaee5e726a3f4018ffa374bd16bb69e86134ba1f64",
"0x0b7f3dafad864aa29108ccacf4724bf334c878ecc732c4061d30690191c57970",
"0xa20f5b29573d024fcc83a3f23ff691ab35248336fb9e570efed16c0dc03bb546",
"0x8600b226b9bae73393ac851c1d8979b0d79187d48ebcecd820c1351866756386",
"0x7a3d04b843829222478e325c08a1cf1f16a4ebf093fac0bdbf3d339bd41171db",
"0xa03b15ed4208d1d5d2f0268180a8e378657fff4fb6b57a0e849c26254d442ef7",
"0x4c8bbe129a87df97b99c3a7abf655dc97ed619d572c68f521730e42ef7603433",
"0xdd65a96e89622c1915c68f96b1e3a06ad3498958517e00548e2336ac8480870d",
"0xe4ebda42b8b352e970a052404fa76bf5bc11326c7c9605d4febc2ef79e9cc5dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


