import * as React from 'react';
import Icon from '../Icon/Icon'

export const CryptoMonoCurrencyIcon = (props) => {

    const { currencyCode, color } = props

    switch (currencyCode) {
        case 'ETH':
        case 'BTC':
        case 'LTC':
        case 'TRX':
        case 'DOGE':
        case 'XVG':
        case 'BSV':
        case 'BCH':
        case 'XRP':
        case 'XLM':
        case 'BNB':
        case 'FIO':
        case 'XMR':
        case 'USDT':
        case 'TRX_BTT':
        case 'ETH_USDC':
        case 'ETH_PAX':
        case 'ETH_DAIM':
        case 'ETH_OKB':
        case 'ETH_MKR':
        case 'ETH_BNT':
        case 'BTG':
        case 'ETH_BAT':
        case 'ETH_UNI':
        case 'ETH_ENJ':
        case 'ETH_1INCH':
        case 'ETH_AAVE':
        case 'ETH_BADGER':
        case 'ETH_BTC':
        case 'ETH_CHZ':
        case 'ETH_CRO':
        case 'ETH_CRV':
        case 'ETH_GRT':
        case 'ETH_HUOBI':
        case 'ETH_MATIC':
        case 'ETH_OMG':
        case 'ETH_RSR':
        case 'ETH_SNX':
        case 'ETH_SUSHI':
        case 'ETH_YFI':
        case 'ETH_ZRX':
        case 'ETH_SXP':
        case 'ETH_LINK':
        case 'ETH_COMP':
        case 'ETH_BAL':
        case 'ETH_BUSD':
        case 'TRX_WBTT':
        case 'TRX_JST':
        case 'TRX_USDJ':
        case 'TRX_SUN':
        case 'TRX_WINK':
        case 'ETH_STORJ':
        case 'ETC':
        case 'ETH_NEXO':
        case 'ETH_FTT':
        case 'ETH_ALPHA':
        case 'VET':
        case 'VTHO':
        case 'SOL':
        case 'AMB':
        case 'TON':
        case 'WAVES':
        case 'BNB_SMART':
        case 'BNB_SMART_ADA':
        case 'BNB_SMART_USD':
        case 'BNB_SMART_CAKE':
            return (
                <>
                    <Icon icon={currencyCode} size={24} color={color} />
                </>
            )
        case 'ETH_KNC':
        case 'ETH_KNC_NEW':
            return (
                <>
                    <Icon icon='ETH_KNC' size={24} color={color} />
                </>
            )
        case 'ETH_USDT':
        case 'TRX_USDT':
            return (
                <>
                    <Icon icon='USDT' size={24} color={color} />
                </>
            )

        case 'TRX_BTC':
            return (
                <>
                    <Icon icon='BTC' size={24} color={color} />
                </>
            )
        case 'TRX_ETH':
            return (
                <>
                    <Icon icon='ETH' size={24} color={color} />
                </>
            )

        case 'ETH_UAX':
            return (
                <>
                    <Icon icon='ETH_UAX_SELECT' color={color} size={24} />
                </>
            )
        case 'ETH_SHIB':
            return (
                <>
                    <Icon icon='ETH_SHIB_BLACK' color={color} size={24} />
                </>
            )
        case 'TRX_TUSD':
        case 'ETH_TRUE_USD':
            return (
                <>
                    <Icon icon='ETH_TRUE_USD' color={color} size={24} />
                </>
            )
        case 'BNB_SMART_BTT':
            return (
                <>
                    <Icon icon='TRX_BTT' color={color} size={24} />
                </>
            )
        case 'BNB_SMART_USDT':
            return (
                <>
                    <Icon icon='USDT' color={color} size={24} />
                </>
            )
        case 'MATIC':
            return (
                <>
                    <Icon icon='ETH_MATIC' color={color} size={24} />
                </>
            )

        default:
            return (
                <>
                    <Icon icon='DEFAULT_COIN' size={24} color={color} />
                </>
            )
    }
}

CryptoMonoCurrencyIcon.defaultProps = {
    color: '#404040'
}
