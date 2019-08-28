/** @module networks */

module.exports = {
  /** @type {Network} */
	bpl: {
		messagePrefix: '\x18Bpl Signed Message:\n',
		bip32: {
			public: 0x2bf4968, // base58 will have a prefix 'apub'
			private: 0x2bf4530 // base58Priv will have a prefix 'apriv'
		},
		pubKeyHash: 0x19, // Addresses will begin with 'B'
		wif: 0xaa, // Network prefix for wif generation
    name: 'mainnet',
    nethash: '585bdcc1c4434beab47078224c707072ef7dd8927187e2b8632907fb8b6d5153',
    token: 'Blockpool',
    symbol: 'BPL',
	},
}
