import CurrencyList from 'currency-list'

import FiatCurrencyCode from '../fiat/fiatCurrencyCode'
import CryptoCurrencies from '../crypto/CurrencyDict'

import PaywayName from '../payways/paywayName'

const blockchainDict = {
    ETHEREUM: 'ETH',
    TRON: 'TRX',
    BNB: 'BNB_SMART',
    BITCOIN: 'BTC',
    SOLANA: 'SOL'
}

export function getCurrencyName(code, locale) {
    const lang = locale || 'en'
    return typeof CryptoCurrencies[code] !== 'undefined' && CryptoCurrencies[code] ? CryptoCurrencies[code].currencyName :
        (typeof CurrencyList.get(code, lang) !== 'undefined' && CurrencyList.get(code, lang) ? CurrencyList.get(code, lang).name : code)
}

export function getCurrencyCode(code) {
    return typeof CryptoCurrencies[code] !== 'undefined' && CryptoCurrencies[code] ? CryptoCurrencies[code].currencySymbol : (FiatCurrencyCode[code] ? FiatCurrencyCode[code] : code)
}

export function getTxLink(code) {
    return typeof CryptoCurrencies[code] !== 'undefined' && CryptoCurrencies[code] ? CryptoCurrencies[code].currencyExplorerTxLink : null
}

export function isToken(code) {
    return typeof CryptoCurrencies[code] !== 'undefined' && CryptoCurrencies[code] ? CryptoCurrencies[code].currencyType === 'token' ? true : false : null
}

export function getTokenNet(code) {
    return typeof CryptoCurrencies[code] !== 'undefined' && CryptoCurrencies[code] ? blockchainDict[CryptoCurrencies[code].tokenBlockchain] : null
}

export function getPaywayName(code) {
    return typeof PaywayName[code] !== 'undefined' &&  PaywayName[code] ?  PaywayName[code] : code
}