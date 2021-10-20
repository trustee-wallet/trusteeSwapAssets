import CurrencyList from 'currency-list'

import { CryptoCurrencyIcon } from './crypto/cryptoCurrency'
import { CryptoMonoCurrencyIcon } from './crypto/currencyIcon'

import { FiatCurrencyIcon } from './fiat/fiatCurrency'
import { FiatMonoCurrencyIcon } from './fiat/currencyIcon'

import {
  getCurrencyName,
  getCurrencyCode,
  getTxLink,
  isToken,
  getTokenNet,
  getPaywayName
} from './services/getProperties'
import { currencyType } from './services/CurrecyType'

import { PaywayIcon } from './payways/payways'

import CryptoCurrencyList from './crypto/CurrencyDict';
import FiatCurrencyList from './fiat/fiatCurrencyName';
import PaywayNameList from './payways/paywayName'

export {
  CurrencyList,
  CryptoCurrencyList,
  FiatCurrencyList,
  PaywayNameList,
  CryptoCurrencyIcon,
  CryptoMonoCurrencyIcon,
  FiatCurrencyIcon,
  FiatMonoCurrencyIcon,
  getCurrencyName,
  getCurrencyCode,
  getTxLink,
  isToken,
  getTokenNet,
  currencyType,
  PaywayIcon,
  getPaywayName
}