const CryptoCurrencies = {
    BTC:
    {
        currencyType: 'coin',
        currencyName: 'Bitcoin',
        currencyCode: 'BTC',
        currencySymbol: 'BTC',
        addressProcessor: 'BTC',
        scannerProcessor: 'BTC',
        extendsProcessor: 'BTC',
        prettyNumberProcessor: 'BTC',
        network: 'mainnet',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/bitcoin/address/',
        currencyExplorerTxLink: 'https://blockchair.com/bitcoin/transaction/',
        addressPrefix: '1',
        defaultPath: `m/44'/0'/0'/0/0`
    },
    ETH:
    {
        currencyType: 'coin',
        currencyName: 'Ethereum',
        currencyCode: 'ETH',
        currencySymbol: 'ETH',
        addressProcessor: 'ETH',
        scannerProcessor: 'ETH',
        extendsProcessor: 'ETH',
        prettyNumberProcessor: 'ETH',
        network: 'mainnet',
        decimals: 18,
        currencyExplorerLink: 'https://blockchair.com/ethereum/address/',
        currencyExplorerTxLink: 'https://blockchair.com/ethereum/transaction/'
    },
    USDT:
    {
        currencyType: 'token',
        currencyName: 'Tether OMNI',
        currencyCode: 'USDT',
        currencySymbol: 'USDT',
        extendsProcessor: 'BTC',
        addressCurrencyCode: 'BTC',
        scannerProcessor: 'USDT',
        prettyNumberProcessor: 'USDT',
        addressUiChecker: 'BTC_LEGACY',
        feesCurrencyCode: 'BTC',
        network: 'mainnet',
        decimals: 8,
        tokenBlockchain: 'BITCOIN',
        currencyExplorerLink: 'https://blockchair.com/bitcoin/address/',
        currencyExplorerTxLink: 'https://blockchair.com/bitcoin/transaction/'
    },
    LTC:
    {
        currencyType: 'coin',
        currencyName: 'Litecoin',
        currencyCode: 'LTC',
        currencySymbol: 'LTC',
        scannerProcessor: 'LTC',
        extendsProcessor: 'BTC',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'LTC',
        network: 'litecoin',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/litecoin/address/',
        currencyExplorerTxLink: 'https://blockchair.com/litecoin/transaction/',
        addressPrefix: 'L',
        defaultPath: `m/44'/2'/0'/0/0`
    },
    ETH_USDT:
    {
        currencyType: 'token',
        currencyName: 'Tether ERC20',
        currencyCode: 'ETH_USDT',
        currencySymbol: 'USDT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'USDT',
        decimals: 6,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        currencyExplorerLink:
            'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7?a='
    },
    ETH_UAX:
    {
        currencyType: 'token',
        currencyName: 'Crypto UAX',
        currencyCode: 'ETH_UAX',
        currencySymbol: 'UAX',
        extendsProcessor: 'ETH_TRUE_USD',
        transferProcessor: 'ETH_UAX',
        scannerProcessor: 'ETH_UAX',
        delegatedTransfer: true,
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'UAH',
        decimals: 2,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x1Fc31488f28ac846588FFA201cDe0669168471bD',
        delegateAddress: '0x8826a55c94915870aceed4ea9f1186678fcbdaf6',
        currencyExplorerLink:
            'https://etherscan.io/token/0x1Fc31488f28ac846588FFA201cDe0669168471bD?a='
    },
    TRX:
    {
        currencyType: 'coin',
        currencyName: 'Tron',
        currencyCode: 'TRX',
        currencySymbol: 'TRX',
        addressProcessor: 'TRX',
        scannerProcessor: 'TRX',
        extendsProcessor: 'TRX',
        prettyNumberProcessor: 'UNIFIED',
        network: 'mainnet',
        decimals: 6,
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    TRX_USDT:
    {
        currencyType: 'token',
        transferProcessor: 'TRX',
        currencyName: 'Tether TRC20',
        currencyCode: 'TRX_USDT',
        currencyIcon: 'TRX',
        currencySymbol: 'USDT',
        ratesCurrencyCode: 'USDT',
        addressProcessor: 'TRX',
        scannerProcessor: 'TRX',
        prettyNumberProcessor: 'UNIFIED',
        addressCurrencyCode: 'TRX',
        addressUiChecker: 'TRX',
        feesCurrencyCode: 'TRX',
        network: 'trx',
        decimals: 6,
        tokenBlockchain: 'TRON',
        tokenName: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    BNB:
    {
        currencyType: 'coin',
        currencyName: 'Binance Coin',
        currencyCode: 'BNB',
        currencySymbol: 'BNB',
        addressProcessor: 'BNB',
        scannerProcessor: 'BNB',
        extendsProcessor: 'BNB',
        prettyNumberProcessor: 'USDT',
        network: 'mainnet',
        decimals: 8,
        currencyExplorerLink: 'https://explorer.binance.org/address/',
        currencyExplorerTxLink: 'https://explorer.binance.org/tx/'
    },
    BNB_SMART:
    {
        currencyType: 'coin',
        currencyName: 'BNB Smart Chain',
        currencyCode: 'BNB_SMART',
        currencySymbol: 'BNB',
        ratesCurrencyCode: 'BNB',
        addressCurrencyCode: 'ETH',
        addressProcessor: 'ETH',
        addressUiChecker: 'ETH',
        scannerProcessor: 'ETH',
        extendsProcessor: 'ETH',
        prettyNumberProcessor: 'ETH',
        transferProcessor: 'BNB_SMART',
        network: 'mainnet',
        decimals: 18,
        currencyExplorerLink: 'https://bscscan.com/address/',
        currencyExplorerTxLink: 'https://bscscan.com/tx/'
    },
    ETH_TRUE_USD:
    {
        currencyType: 'token',
        currencyName: 'TrueUSD',
        currencyCode: 'ETH_TRUE_USD',
        currencyIcon: 'ETH',
        currencySymbol: 'TUSD',
        addressProcessor: 'ETH',
        scannerProcessor: 'ETH_ERC_20',
        transferProcessor: 'ETH_ERC_20',
        prettyNumberProcessor: 'ETH_ERC_20',
        addressCurrencyCode: 'ETH',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'TUSD',
        feesCurrencyCode: 'ETH',
        network: 'mainnet',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x0000000000085d4780B73119b644AE5ecd22b376',
        currencyExplorerLink:
            'https://etherscan.io/token/0x0000000000085d4780B73119b644AE5ecd22b376?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_BNB:
    {
        currencyType: 'token',
        currencyName: 'BNB ERC20',
        currencyCode: 'ETH_BNB',
        currencySymbol: 'BNB',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BNB',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
        currencyExplorerLink:
            'https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52?a='
    },
    ETH_USDC:
    {
        currencyType: 'token',
        currencyName: 'USDC ERC20',
        currencyCode: 'ETH_USDC',
        currencySymbol: 'USDC',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'USDC',
        decimals: 6,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        currencyExplorerLink:
            'https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_PAX:
    {
        currencyType: 'token',
        currencyName: 'Paxos Standard',
        currencyCode: 'ETH_PAX',
        currencySymbol: 'PAX',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'PAX',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x8e870d67f660d95d5be530380d0ec0bd388289e1',
        currencyExplorerLink:
            'https://etherscan.io/token/0x8e870d67f660d95d5be530380d0ec0bd388289e1?a='
    },
    ETH_DAI:
    {
        currencyType: 'token',
        currencyName: 'Sai Stablecoin v1.0',
        currencyCode: 'ETH_DAI',
        currencySymbol: 'SAI',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'DAI',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359',
        currencyExplorerLink:
            'https://etherscan.io/token/0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359?a='
    },
    FIO:
    {
        currencyType: 'coin',
        currencyName: 'FIO',
        currencyCode: 'FIO',
        currencySymbol: 'FIO',
        addressProcessor: 'FIO',
        scannerProcessor: 'FIO',
        extendsProcessor: 'FIO',
        prettyNumberProcessor: 'UNIFIED',
        network: 'mainnet',
        decimals: 9,
        currencyExplorerLink: 'https://fio.bloks.io/key/',
        currencyExplorerTxLink: 'https://fio.bloks.io/transaction/'
    },
    ETH_ZRX:
    {
        currencyType: 'token',
        currencyName: '0x',
        currencyCode: 'ETH_ZRX',
        currencySymbol: 'ZRX',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'ZRX',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498',
        currencyExplorerLink:
            'https://etherscan.io/token/0xe41d2489571d322189246dafa5ebde1f4699f498?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_1INCH:
    {
        currencyType: 'token',
        currencyName: '1inch',
        currencyCode: 'ETH_1INCH',
        currencySymbol: '1INCH',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: '1INCH',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x111111111117dc0aa78b770fa6a738034120c302',
        currencyExplorerLink:
            'https://etherscan.io/token/0x111111111117dc0aa78b770fa6a738034120c302?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_AAVE:
    {
        currencyType: 'token',
        currencyName: 'Aave Token',
        currencyCode: 'ETH_AAVE',
        currencySymbol: 'AAVE',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'AAVE',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
        currencyExplorerLink:
            'https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_ALPHA:
    {
        currencyType: 'token',
        currencyName: 'Alpha Finance BEP20',
        currencyCode: 'BNB_SMART_ALPHA',
        currencySymbol: 'ALPHA',
        ratesCurrencyCode: 'ALPHA',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0xa1faa113cbe53436df28ff0aee54275c13b40975?a='
    },
    ETH_ALPHA:
    {
        currencyType: 'token',
        currencyName: 'Alpha Finance Lab',
        currencyCode: 'ETH_ALPHA',
        currencySymbol: 'ALPHA',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'ALPHA',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
        currencyExplorerLink:
            'https://etherscan.io/token/0xa1faa113cbe53436df28ff0aee54275c13b40975?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_BADGER:
    {
        currencyType: 'token',
        currencyName: 'Badger DAO',
        currencyCode: 'ETH_BADGER',
        currencySymbol: 'BADGER',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BADGER',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
        currencyExplorerLink:
            'https://etherscan.io/token/0x3472a5a71965499acd81997a54bba8d852c6e53d?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_BAL:
    {
        currencyType: 'token',
        currencyName: 'Balancer',
        currencyCode: 'ETH_BAL',
        currencySymbol: 'BAL',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BAL',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xba100000625a3754423978a60c9317c58a424e3d',
        currencyExplorerLink:
            'https://etherscan.io/token/0xba100000625a3754423978a60c9317c58a424e3d?a='
    },
    ETH_BNT:
    {
        currencyType: 'token',
        currencyName: 'Bancor',
        currencyCode: 'ETH_BNT',
        currencySymbol: 'BNT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BNT',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
        currencyExplorerLink:
            'https://etherscan.io/token/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c?a='
    },
    ETH_BAT:
    {
        currencyType: 'token',
        currencyName: 'Basic Attention Token ERC20',
        currencyCode: 'ETH_BAT',
        currencySymbol: 'BAT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BAT',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
        currencyExplorerLink:
            'https://etherscan.io/token/0x0d8775f648430679a709e98d2b0cb6250d2887ef?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_BAT:
    {
        currencyType: 'token',
        currencyName: 'Basic Attention Token BEP20',
        currencyCode: 'BNB_SMART_BAT',
        currencySymbol: 'BAT',
        ratesCurrencyCode: 'BAT',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x101d82428437127bf1608f699cd651e6abf9766e',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x101d82428437127bf1608f699cd651e6abf9766e?a='
    },
    ETH_BUSD:
    {
        currencyType: 'token',
        currencyName: 'Binance USD ERC20',
        currencyCode: 'ETH_BUSD',
        currencySymbol: 'BUSD',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BUSD',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        currencyExplorerLink:
            'https://etherscan.io/token/0xe9e7cea3dedca5984780bafc599bd69add087d56?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BTC_TEST:
    {
        currencyType: 'coin',
        currencyName: 'Bitcoin (Testnet)',
        currencyCode: 'BTC_TEST',
        currencySymbol: 'BTC TEST',
        scannerProcessor: 'BTC_TEST',
        ratesCurrencyCode: 'SKIP',
        extendsProcessor: 'BTC',
        network: 'testnet',
        decimals: 8,
        currencyExplorerLink: 'https://live.blockcypher.com/btc-testnet/address/',
        currencyExplorerTxLink: 'https://live.blockcypher.com/btc-testnet/tx/'
    },
    BCH:
    {
        currencyType: 'coin',
        currencyName: 'Bitcoin Cash',
        currencyCode: 'BCH',
        currencySymbol: 'BCH',
        addressProcessor: 'BCH',
        scannerProcessor: 'BCH',
        extendsProcessor: 'BTC',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'BCH',
        network: 'bitcoincash',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/bitcoin-cash/address/',
        currencyExplorerTxLink: 'https://blockchair.com/bitcoin-cash/transaction/'
    },
    BTG:
    {
        currencyType: 'coin',
        currencyName: 'Bitcoin Gold',
        currencyCode: 'BTG',
        currencySymbol: 'BTG',
        scannerProcessor: 'BTG',
        extendsProcessor: 'BTC',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'BTG',
        network: 'bitcoingold',
        decimals: 8,
        currencyExplorerLink: 'https://explorer.bitcoingold.org/insight/address/',
        currencyExplorerTxLink: 'https://explorer.bitcoingold.org/insight/tx/'
    },
    BSV:
    {
        currencyType: 'coin',
        currencyName: 'BitcoinSV',
        currencyCode: 'BSV',
        currencySymbol: 'BSV',
        scannerProcessor: 'BSV',
        extendsProcessor: 'BTC',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'BSV',
        network: 'bitcoinsv',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/bitcoin-sv/address/',
        currencyExplorerTxLink: 'https://blockchair.com/bitcoin-sv/transaction/'
    },
    TRX_BTT:
    {
        currencyType: 'token',
        currencyName: 'BitTorrent',
        currencyCode: 'TRX_BTT',
        currencySymbol: 'BTT',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'BTT',
        network: 'trx',
        skipParentBalanceCheck: true,
        decimals: 6,
        tokenBlockchain: 'TRON',
        tokenName: '1002000',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    TRX_WBTT:
    {
        currencyType: 'token',
        currencyName: 'BitTorrent TRC20',
        currencyCode: 'TRX_WBTT',
        currencySymbol: 'WBTT',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'BTT',
        network: 'trx',
        decimals: 6,
        tokenBlockchain: 'TRON',
        tokenName: 'TKfjV9RNKJJCqPvBtK8L7Knykh7DNWvnYt',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    BNB_SMART_BTC:
    {
        currencyType: 'token',
        currencyName: 'BTC BEP20',
        currencyCode: 'BNB_SMART_BTC',
        currencySymbol: 'BTC',
        ratesCurrencyCode: 'BTC',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c?a='
    },
    TRX_BTC:
    {
        currencyType: 'token',
        currencyName: 'BTC TRC20',
        currencyCode: 'TRX_BTC',
        currencySymbol: 'BTC',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'BTC',
        network: 'trx',
        decimals: 8,
        tokenBlockchain: 'TRON',
        tokenName: 'TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    BNB_SMART_ADA:
    {
        currencyType: 'token',
        currencyName: 'Cardano BEP20',
        currencyCode: 'BNB_SMART_ADA',
        currencySymbol: 'ADA',
        ratesCurrencyCode: 'ADA',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47?a='
    },
    BNB_SMART_LINK:
    {
        currencyType: 'token',
        currencyName: 'ChainLink BEP20',
        currencyCode: 'BNB_SMART_LINK',
        currencySymbol: 'LINK',
        ratesCurrencyCode: 'LINK',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd?a='
    },
    ETH_LINK:
    {
        currencyType: 'token',
        currencyName: 'ChainLink ERC20',
        currencyCode: 'ETH_LINK',
        currencySymbol: 'LINK',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'LINK',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x514910771af9ca656af840dff83e8264ecf986ca',
        currencyExplorerLink:
            'https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_CHZ:
    {
        currencyType: 'token',
        currencyName: 'Chiliz',
        currencyCode: 'ETH_CHZ',
        currencySymbol: 'CHZ',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'CHZ',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x3506424f91fd33084466f402d5d97f05f8e3b4af',
        currencyExplorerLink:
            'https://etherscan.io/tokEN/0X3506424F91FD33084466F402D5D97F05F8E3B4AF?A=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_COMP:
    {
        currencyType: 'token',
        currencyName: 'Compound',
        currencyCode: 'ETH_COMP',
        currencySymbol: 'COMP',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'COMP',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xc00e94cb662c3520282e6f5717214004a7f26888',
        currencyExplorerLink:
            'https://etherscan.io/token/0xc00e94cb662c3520282e6f5717214004a7f26888?a='
    },
    ETH_CRO:
    {
        currencyType: 'token',
        currencyName: 'Crypto.com Coin',
        currencyCode: 'ETH_CRO',
        currencySymbol: 'CRO',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'CRO',
        decimals: 8,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b',
        currencyExplorerLink:
            'https://etherscan.io/token/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_SOUL:
    {
        currencyType: 'token',
        currencyName: 'CryptoSoul',
        currencyCode: 'ETH_SOUL',
        currencySymbol: 'SOUL',
        extendsProcessor: 'ETH_TRUE_USD',
        scannerProcessor: 'ETH_SOUL',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'SOUL',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xbb1f24c0c1554b9990222f036b0aad6ee4caec29',
        currencyExplorerLink:
            'https://etherscan.io/token/0xbb1f24c0c1554b9990222f036b0aad6ee4caec29?a='
    },
    ETH_CRV:
    {
        currencyType: 'token',
        currencyName: 'Curve DAO Token',
        currencyCode: 'ETH_CRV',
        currencySymbol: 'CRV',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'CRV',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xd533a949740bb3306d119cc777fa900ba034cd52',
        currencyExplorerLink:
            'https://etherscan.io/token/0xd533a949740bb3306d119cc777fa900ba034cd52?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_DAIM:
    {
        currencyType: 'token',
        currencyName: 'Dai Stablecoin',
        currencyCode: 'ETH_DAIM',
        currencySymbol: 'DAI',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'DAI',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
        currencyExplorerLink:
            'https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f?a='
    },
    BNB_SMART_DOGE:
    {
        currencyType: 'token',
        currencyName: 'DOGE BEP20',
        currencyCode: 'BNB_SMART_DOGE',
        currencySymbol: 'DOGE',
        ratesCurrencyCode: 'DOGE',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43?a='
    },
    DOGE:
    {
        currencyType: 'coin',
        currencyName: 'Dogecoin',
        currencyCode: 'DOGE',
        currencySymbol: 'DOGE',
        extendsProcessor: 'BTC',
        scannerProcessor: 'DOGE',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'DOGE',
        network: 'dogecoin',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/dogecoin/address/',
        currencyExplorerTxLink: 'https://blockchair.com/dogecoin/transaction/'
    },
    ETH_ENJ:
    {
        currencyType: 'token',
        currencyName: 'EnjinCoin',
        currencyCode: 'ETH_ENJ',
        currencySymbol: 'ENJ',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'ENJ',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
        currencyExplorerLink:
            'https://etherscan.io/token/0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_ETH:
    {
        currencyType: 'token',
        currencyName: 'ETH BEP20',
        currencyCode: 'BNB_SMART_ETH',
        currencySymbol: 'ETH',
        ratesCurrencyCode: 'ETH',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8?a='
    },
    TRX_ETH:
    {
        currencyType: 'token',
        currencyName: 'ETH TRC20',
        currencyCode: 'TRX_ETH',
        currencySymbol: 'ETH',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'ETH',
        network: 'trx',
        decimals: 18,
        tokenBlockchain: 'TRON',
        tokenName: 'THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    ETC:
    {
        currencyType: 'coin',
        currencyName: 'Ethereum Classic',
        currencyCode: 'ETC',
        currencySymbol: 'ETC',
        ratesCurrencyCode: 'ETC',
        addressCurrencyCode: 'ETC',
        addressProcessor: 'ETH',
        addressUiChecker: 'ETH',
        scannerProcessor: 'ETH',
        extendsProcessor: 'ETH',
        prettyNumberProcessor: 'ETH',
        transferProcessor: 'ETC',
        network: 'mainnet',
        decimals: 18,
        currencyExplorerLink: 'https://blockscout.com/etc/mainnet/address/',
        currencyExplorerTxLink: 'https://blockscout.com/etc/mainnet/tx/'
    },
    ETH_ROPSTEN:
    {
        currencyType: 'coin',
        currencyName: 'Ethereum Ropsten',
        currencyCode: 'ETH_ROPSTEN',
        currencySymbol: 'ETH',
        currencyIcon: 'ETH',
        ratesCurrencyCode: 'SKIP',
        extendsProcessor: 'ETH',
        transferProcessor: 'ETH',
        network: 'ropsten',
        decimals: 18,
        currencyExplorerLink: 'https://ropsten.etherscan.io/address/',
        currencyExplorerTxLink: 'https://ropsten.etherscan.io/tx/'
    },
    ETH_LEND:
    {
        currencyType: 'token',
        currencyName: 'EthLend',
        currencyCode: 'ETH_LEND',
        currencySymbol: 'LEND',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'LEND',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x80fb784b7ed66730e8b1dbd9820afd29931aab03',
        currencyExplorerLink:
            'https://etherscan.io/token/0x80fb784b7ed66730e8b1dbd9820afd29931aab03?a='
    },
    ETH_GRT:
    {
        currencyType: 'token',
        currencyName: 'Graph Token',
        currencyCode: 'ETH_GRT',
        currencySymbol: 'GRT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'GRT',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
        currencyExplorerLink:
            'https://etherscan.io/token/0xc944e90c64b2c07662a292be6244bdf05cda44a7?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_ONE:
    {
        currencyType: 'token',
        currencyName: 'Harmony',
        currencyCode: 'ETH_ONE',
        currencySymbol: 'ONE',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'ONE',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x799a4202c12ca952cb311598a024c80ed371a41e',
        currencyExplorerLink:
            'https://etherscan.io/token/0x799a4202c12ca952cb311598a024c80ed371a41e?a='
    },
    ETH_HUOBI:
    {
        currencyType: 'token',
        currencyName: 'Huobi Token',
        currencyCode: 'ETH_HUOBI',
        currencySymbol: 'HT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'HT',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
        currencyExplorerLink:
            'https://etherscan.io/token/0x6f259637dcd74c767781e37bc6133cd6a68aa161?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    TRX_JST:
    {
        currencyType: 'token',
        currencyName: 'JUST',
        currencyCode: 'TRX_JST',
        currencySymbol: 'JST',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'JST',
        network: 'trx',
        decimals: 18,
        tokenBlockchain: 'TRON',
        tokenName: 'TCFLL5dx5ZJdKnWuesXxi1VPwjLVmWZZy9',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    TRX_USDJ:
    {
        currencyType: 'token',
        currencyName: 'JUST Stablecoin',
        currencyCode: 'TRX_USDJ',
        currencySymbol: 'USDJ',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'USDJ',
        network: 'trx',
        decimals: 18,
        tokenBlockchain: 'TRON',
        tokenName: 'TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    ETH_KNC:
    {
        currencyType: 'token',
        currencyName: 'KyberNetwork',
        currencyCode: 'ETH_KNC',
        currencySymbol: 'KNC',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'KNC',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
        currencyExplorerLink:
            'https://etherscan.io/token/0xdd974d5c2e2928dea5f71b9825b8b646686bd200?a='
    },
    ETH_KNC_NEW:
    {
        currencyType: 'token',
        currencyName: 'KyberNetwork',
        currencyCode: 'ETH_KNC_NEW',
        currencySymbol: 'KNC',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'KNC',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202',
        currencyExplorerLink:
            'https://etherscan.io/token/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202?a='
    },
    BNB_SMART_LTC:
    {
        currencyType: 'token',
        currencyName: 'LTC BEP20',
        currencyCode: 'BNB_SMART_LTC',
        currencySymbol: 'LTC',
        ratesCurrencyCode: 'LTC',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x4338665cbb7b2485a8855a139b75d5e34ab0db94?a='
    },
    ETH_MKR:
    {
        currencyType: 'token',
        currencyName: 'Maker',
        currencyCode: 'ETH_MKR',
        currencySymbol: 'MKR',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'MKR',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        currencyExplorerLink:
            'https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a='
    },
    XMR:
    {
        currencyType: 'coin',
        currencyName: 'Monero',
        currencyCode: 'XMR',
        currencySymbol: 'XMR',
        addressProcessor: 'XMR',
        scannerProcessor: 'XMR',
        extendsProcessor: 'XMR',
        prettyNumberProcessor: 'UNIFIED',
        network: 'mainnet',
        decimals: 12,
        currencyExplorerLink: 'https://xmrchain.net/search?value=',
        currencyExplorerTxLink: 'https://blockchair.com/monero/transaction/'
    },
    ETH_OKB:
    {
        currencyType: 'token',
        currencyName: 'OKB',
        currencyCode: 'ETH_OKB',
        currencySymbol: 'OKB',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'OKB',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x75231f58b43240c9718dd58b4967c5114342a86c',
        currencyExplorerLink:
            'https://etherscan.io/token/0x75231f58b43240c9718dd58b4967c5114342a86c?a='
    },
    ETH_OMG:
    {
        currencyType: 'token',
        currencyName: 'OMG Network',
        currencyCode: 'ETH_OMG',
        currencySymbol: 'OMG',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'OMG',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
        currencyExplorerLink:
            'https://etherscan.io/token/0xd26114cd6ee289accf82350c8d8487fedb8a0c07?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_CAKE:
    {
        currencyType: 'token',
        currencyName: 'PancakeSwap Token',
        currencyCode: 'BNB_SMART_CAKE',
        currencyIcon: 'BNB',
        currencySymbol: 'CAKE',
        addressProcessor: 'ETH',
        scannerProcessor: 'BNB_SMART_20',
        transferProcessor: 'BNB_SMART_20',
        prettyNumberProcessor: 'ETH_ERC_20',
        addressCurrencyCode: 'ETH',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'CAKE',
        feesCurrencyCode: 'BNB_SMART',
        network: 'mainnet',
        decimals: 18,
        tokenBlockchain: 'BNB',
        tokenAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
        currencyExplorerLink:
            'https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82?a=',
        currencyExplorerTxLink: 'https://bscscan.com/tx/'
    },
    ETH_MATIC:
    {
        currencyType: 'token',
        currencyName: 'Polygon',
        currencyCode: 'ETH_MATIC',
        currencySymbol: 'MATIC',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'MATIC',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
        currencyExplorerLink:
            'https://etherscan.io/token/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_RSR:
    {
        currencyType: 'token',
        currencyName: 'Reserve Rights',
        currencyCode: 'ETH_RSR',
        currencySymbol: 'RSR',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'RSR',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
        currencyExplorerLink:
            'https://etherscan.io/token/0x8762db106b2c2a0bccb3a80d1ed41273552616e8?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    XRP:
    {
        currencyType: 'coin',
        currencyName: 'Ripple',
        currencyCode: 'XRP',
        currencySymbol: 'XRP',
        addressProcessor: 'XRP',
        scannerProcessor: 'XRP',
        extendsProcessor: 'XRP',
        prettyNumberProcessor: 'USDT',
        network: 'mainnet',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/ripple/account/',
        currencyExplorerTxLink: 'https://blockchair.com/ripple/transaction/'
    },
    XLM:
    {
        currencyType: 'coin',
        currencyName: 'Stellar',
        currencyCode: 'XLM',
        currencySymbol: 'XLM',
        addressProcessor: 'XLM',
        scannerProcessor: 'XLM',
        extendsProcessor: 'XLM',
        prettyNumberProcessor: 'USDT',
        network: 'mainnet',
        decimals: 8,
        currencyExplorerLink: 'https://blockchair.com/stellar/account/',
        currencyExplorerTxLink: 'https://blockchair.com/stellar/transaction/'
    },
    TRX_SUN:
    {
        currencyType: 'token',
        currencyName: 'SUN',
        currencyCode: 'TRX_SUN',
        currencySymbol: 'SUN',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'SUN',
        network: 'trx',
        decimals: 18,
        tokenBlockchain: 'TRON',
        tokenName: 'TKkeiboTkxXKJpbmVFbv4a8ov5rAfRDMf9',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    ETH_SUSHI:
    {
        currencyType: 'token',
        currencyName: 'Sushi Token',
        currencyCode: 'ETH_SUSHI',
        currencySymbol: 'SUSHI',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'SUSHI',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
        currencyExplorerLink:
            'https://etherscan.io/token/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_SXP:
    {
        currencyType: 'token',
        currencyName: 'Swipe ERC20',
        currencyCode: 'ETH_SXP',
        currencySymbol: 'SXP',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'SXP',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
        currencyExplorerLink:
            'https://etherscan.io/token/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_SXP:
    {
        currencyType: 'token',
        currencyName: 'Swipe BEP20',
        currencyCode: 'BNB_SMART_SXP',
        currencySymbol: 'SXP',
        ratesCurrencyCode: 'SXP',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x47bead2563dcbf3bf2c9407fea4dc236faba485a?a='
    },
    ETH_SNX:
    {
        currencyType: 'token',
        currencyName: 'Synthetix',
        currencyCode: 'ETH_SNX',
        currencySymbol: 'SNX',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'SNX',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
        currencyExplorerLink:
            'https://etherscan.io/token/0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_USDT:
    {
        currencyType: 'token',
        currencyName: 'Tether BEP20',
        currencyCode: 'BNB_SMART_USDT',
        currencySymbol: 'USDT',
        ratesCurrencyCode: 'USDT',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x55d398326f99059ff775485246999027b3197955',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955?a='
    },
    BNB_SMART_UNI:
    {
        currencyType: 'token',
        currencyName: 'Uniswap BEP20',
        currencyCode: 'BNB_SMART_UNI',
        currencySymbol: 'UNI',
        ratesCurrencyCode: 'UNI',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1?a='
    },
    ETH_UNI:
    {
        currencyType: 'token',
        currencyName: 'Uniswap ERC20',
        currencyCode: 'ETH_UNI',
        currencySymbol: 'UNI',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'UNI',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        currencyExplorerLink:
            'https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    BNB_SMART_USD:
    {
        currencyType: 'token',
        currencyName: 'USD BEP20',
        currencyCode: 'BNB_SMART_USD',
        currencySymbol: 'BUSD',
        ratesCurrencyCode: 'BUSD',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56?a='
    },
    BNB_SMART_USDC:
    {
        currencyType: 'token',
        currencyName: 'USDC BEP20',
        currencyCode: 'BNB_SMART_USDC',
        currencySymbol: 'USDC',
        ratesCurrencyCode: 'USDC',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d?a='
    },
    XVG:
    {
        currencyType: 'coin',
        currencyName: 'Verge',
        currencyCode: 'XVG',
        currencySymbol: 'XVG',
        extendsProcessor: 'BTC',
        scannerProcessor: 'XVG',
        addressUiChecker: 'BTC_BY_NETWORK',
        rateUiScanner: 'XVG',
        network: 'verge',
        prettyNumberProcessor: 'UNIFIED',
        decimals: 6,
        currencyExplorerLink: 'https://verge-blockchain.info/address/',
        currencyExplorerTxLink: 'https://verge-blockchain.info/tx/'
    },
    TRX_WINK:
    {
        currencyType: 'token',
        currencyName: 'WIN Token',
        currencyCode: 'TRX_WINK',
        currencySymbol: 'WINK',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'WIN',
        network: 'trx',
        decimals: 6,
        tokenBlockchain: 'TRON',
        tokenName: 'TLa2f6VPqDgRE67v1736s7bJ8Ray5wYjU7',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    ETH_BTC:
    {
        currencyType: 'token',
        currencyName: 'Wrapped BTC ERC20',
        currencyCode: 'ETH_BTC',
        currencySymbol: 'BTC',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'BTC',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        currencyExplorerLink:
            'https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_YFI:
    {
        currencyType: 'token',
        currencyName: 'yearn.finance',
        currencyCode: 'ETH_YFI',
        currencySymbol: 'YFI',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'YFI',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
        currencyExplorerLink:
            'https://etherscan.io/token/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_NEXO:
    {
        currencyType: 'token',
        currencyName: 'Nexo',
        currencyCode: 'ETH_NEXO',
        currencySymbol: 'NEXO',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'NEXO',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
        currencyExplorerLink:
            'https://etherscan.io/token/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_FTT:
    {
        currencyType: 'token',
        currencyName: 'FTX Token',
        currencyCode: 'ETH_FTT',
        currencySymbol: 'FTT',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'FTT',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
        currencyExplorerLink:
            'https://etherscan.io/token/0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    ETH_SHIB:
    {
        currencyType: 'token',
        currencyName: 'Shiba ERC20',
        currencyCode: 'ETH_SHIB',
        currencySymbol: 'SHIB',
        extendsProcessor: 'ETH_TRUE_USD',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'SHIB',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce',
        currencyExplorerLink:
            'https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
    VET:
    {
        currencyType: 'coin',
        currencyName: 'VeChain Thor',
        currencyCode: 'VET',
        currencySymbol: 'VET',
        ratesCurrencyCode: 'VET',
        addressCurrencyCode: 'VET',
        addressProcessor: 'ETH',
        addressUiChecker: 'ETH',
        scannerProcessor: 'VET',
        prettyNumberProcessor: 'ETH',
        transferProcessor: 'VET',
        network: 'mainnet',
        decimals: 18,
        currencyExplorerLink: 'https://explore.vechain.org/accounts/',
        currencyExplorerTxLink: 'https://explore.vechain.org/transactions/'
    },
    VTHO:
    {
        currencyType: 'coin',
        currencyName: 'VeChain Thor Token',
        currencyCode: 'VTHO',
        currencySymbol: 'VTHO',
        ratesCurrencyCode: 'VTHO',
        addressCurrencyCode: 'VET',
        addressProcessor: 'ETH',
        addressUiChecker: 'ETH',
        scannerProcessor: 'VET',
        prettyNumberProcessor: 'ETH',
        transferProcessor: 'VET',
        network: 'mainnet',
        decimals: 18,
        currencyExplorerLink: 'https://explore.vechain.org/accounts/',
        currencyExplorerTxLink: 'https://explore.vechain.org/transactions/'
    },
    TRX_TUSD:
    {
        currencyType: 'token',
        currencyName: 'TrueUSD TRC20',
        currencyCode: 'TRX_TUSD',
        currencySymbol: 'TUSD',
        extendsProcessor: 'TRX_USDT',
        addressUiChecker: 'TRX',
        ratesCurrencyCode: 'TUSD',
        network: 'trx',
        decimals: 18,
        tokenBlockchain: 'TRON',
        tokenName: 'TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4',
        currencyExplorerLink: 'https://tronscan.org/#/address/',
        currencyExplorerTxLink: 'https://tronscan.org/#/transaction/'
    },
    SOL:
    {
        currencyType: 'coin',
        currencyName: 'Solana',
        currencyCode: 'SOL',
        currencySymbol: 'SOL',
        addressProcessor: 'SOL',
        addressUiChecker: 'SOL',
        scannerProcessor: 'SOL',
        prettyNumberProcessor: 'UNIFIED',
        network: 'mainnet',
        decimals: 9,
        currencyExplorerLink: 'https://explorer.solana.com/address/',
        currencyExplorerTxLink: 'https://blockchair.com/ethereum/transaction/'
    },
    TON:
    {
        currencyType: 'coin',
        currencyName: 'TON',
        currencyCode: 'TON',
        currencySymbol: 'TON',
        extendsProcessor: 'TON',
        addressUiChecker: 'TON',
        ratesCurrencyCode: 'TON',
        network: 'ton',
        decimals: 18,
        currencyExplorerLink: 'https://ton.live/accounts/accountDetails?id=',
        currencyExplorerTxLink: 'https://ton.live/transactions/transactionDetails?id='
    },
    WAVES:
    {
        currencyType: 'coin',
        currencyName: 'Waves',
        currencyCode: 'WAVES',
        currencySymbol: 'WAVES',
        addressProcessor: 'WAVES',
        scannerProcessor: 'WAVES',
        prettyNumberProcessor: 'UNIFIED',
        decimals: 8,
        currencyExplorerLink: 'https://wavesexplorer.com/address/',
        currencyExplorerTxLink: 'https://wavesexplorer.com/tx/'
    },
    BNB_SMART_BTT:
    {
        currencyType: 'token',
        currencyName: 'BTT BEP20',
        currencyCode: 'BNB_SMART_BTT',
        currencySymbol: 'BTT',
        ratesCurrencyCode: 'BTT',
        extendsProcessor: 'BNB_SMART_CAKE',
        addressUiChecker: 'ETH',
        tokenAddress: '0x8595f9da7b868b1822194faed312235e43007b49',
        tokenBlockchain: 'BNB',
        currencyExplorerLink:
            'https://bscscan.com/token/0x8595f9da7b868b1822194faed312235e43007b49?a='
    },
    AMB: {
        "currencyType": "coin",
        "currencyName": "Ambrosus Network",
        "currencyCode": "AMB",
        "currencySymbol": "AMB",
        "ratesCurrencyCode": "AMB",
        "addressProcessor": "ETH",
        "addressUiChecker": "ETH",
        "scannerProcessor": "ETH",
        "extendsProcessor": "ETH",
        "prettyNumberProcessor": "ETH",
        "transferProcessor": "ETC",
        "network": "mainnet",
        "decimals": 18,
        "currencyExplorerLink": "https://explorer.ambrosus.io/address/",
        "currencyExplorerTxLink": "https://explorer.ambrosus.io/tx/"
    },
    MATIC: {
		"currencyType": "coin",
		"currencyName": "Polygon (Matic) Network",
		"currencyCode": "MATIC",
		"currencySymbol": "MATIC",
		"ratesCurrencyCode": "MATIC",
		"addressProcessor": "ETH",
		"addressUiChecker": "ETH",
		"scannerProcessor": "ETH",
		"extendsProcessor": "ETH",
		"prettyNumberProcessor": "ETH",
		"transferProcessor": "ETC",
		"network": "mainnet",
		"decimals": 18,
		"currencyExplorerLink": "https://polygonscan.com/address/",
		"currencyExplorerTxLink": "https://polygonscan.com/tx/"
	},



    ETH_STORJ: {
        currencyType: 'token',
        currencyName: 'STORJ',
        currencyCode: 'ETH_STORJ',
        currencySymbol: 'STORJ',
        extendsProcessor: 'ETH_STORJ',
        addressUiChecker: 'ETH',
        ratesCurrencyCode: 'STORJ',
        decimals: 18,
        tokenBlockchain: 'ETHEREUM',
        tokenAddress: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
        currencyExplorerLink:
            'https://etherscan.io/token/0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac?a=',
        currencyExplorerTxLink: 'https://etherscan.io/tx/'
    },
}

export default CryptoCurrencies