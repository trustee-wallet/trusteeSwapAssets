import * as React from 'react';

import '../styles/currency.css'
import Icon from '../Icon/Icon'
import UiColor from '../styles/UiColor'

export const CryptoCurrencyIcon = (props) => {
    const {
        currencyCode,
        colorNotActive,
        style,
        checked,
        checkedColor,
        themeMode
    } = props

    const defaultColor = themeMode === 'light' ? '#404040' : '#DADADA'

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
        case 'ETC':
        case 'VET':
        case 'VTHO':
        case 'SOL':
        case 'WAVES':
        case 'BNB_SMART':
        case 'AMB':
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                    <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                </div>
            )
        case 'TON':
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                    <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : ''} style={{ marginTop: 7, marginRight: 8 }} />
                </div>
            )
        case 'XMR':
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                    <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                </div>
            )
        case 'USDT':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='USDT' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['USDT'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='BTC'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['BTC'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }}
                    />
                </div>
            )
        case 'ETH_USDT':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='USDT' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['USDT'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_BTT':
        case 'TRX_WBTT':
        case 'TRX_JST':
        case 'TRX_USDJ':
        case 'TRX_WINK':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={currencyCode} size={23} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 8, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='TRX'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['TRX'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_SUN':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={currencyCode} size={23} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 8, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='TRX'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['TRX'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_USDT':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='USDT' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['USDT'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='TRX'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['TRX'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_BTC':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['BTC'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='BTC' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['BTC'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='TRX'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['TRX'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_ETH':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='ETH' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='TRX'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['TRX'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'TRX_TUSD':
        case 'ETH_TRUE_USD':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='ETH_TRUE_USD' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon={currencyCode.indexOf('TRX') !== -1 ? 'TRX' : 'ETH'}
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor[currencyCode.indexOf('TRX') !== -1 ? 'TRX' : 'ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )

        case 'ETH_USDC':
        case 'ETH_PAX':
        case 'ETH_DAIM':
        case 'ETH_OKB':
        case 'ETH_MKR':
        case 'ETH_BNT':
        case 'ETH_UNI':
        case 'ETH_ENJ':
        case 'ETH_AAVE':
        case 'ETH_BADGER':
        case 'ETH_CHZ':
        case 'ETH_CRO':
        case 'ETH_CRV':
        case 'ETH_GRT':
        case 'ETH_MATIC':
        case 'ETH_OMG':
        case 'ETH_RSR':
        case 'ETH_SNX':
        case 'ETH_YFI':
        case 'ETH_ZRX':
        case 'ETH_SXP':
        case 'ETH_LINK':
        case 'ETH_BAL':
        case 'ETH_COMP':
        case 'ETH_BUSD':
        case 'ETH_STORJ':
        case 'ETH_FTT':
        case 'ETH_ALPHA':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'ETH_KNC':
        case 'ETH_KNC_NEW':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='ETH_KNC' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'BTG':
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                    <div className='btg' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : '#E1A600' }}>
                        <Icon icon={currencyCode} size={20} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={style ? style : { marginTop: 0, marginLeft: 2 }} />
                    </div>
                </div>
            )
        case 'ETH_UAX':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        {colorNotActive || checked ?
                            <Icon icon='ETH_UAX_SELECT' color={colorNotActive ? colorNotActive : checked ? checkedColor : ''} size={24} style={{ marginTop: 7, marginRight: 8 }} />
                            : <Icon icon={currencyCode} size={24} style={{ marginTop: 7, marginRight: 8 }} color={UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} />}
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'ETH_BAT':
        case 'ETH_1INCH':
        case 'ETH_BTC':
        case 'ETH_HUOBI':
        case 'ETH_SUSHI':
        case 'ETH_NEXO':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'ETH_SHIB':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={checked ? 'ETH_SHIB_BLACK' : currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : ''} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='ETH'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['ETH'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'BNB_SMART_ADA':
        case 'BNB_SMART_USD':
        case 'BNB_SMART_CAKE':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon={currencyCode} size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='BNB_SMART'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['BNB_SMART'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'BNB_SMART_BTT':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='TRX_BTT' size={23} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 8, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='BNB_SMART'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['BNB_SMART'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'BNB_SMART_USDT':
            return (
                <div className='currency-cicle-wrap'>
                    <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                        <Icon icon='USDT' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['USDT'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                    </div>
                    <Icon
                        icon='BNB_SMART'
                        size={16}
                        color={colorNotActive ? colorNotActive : UiColor['BNB_SMART'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        className='currecny-little-circle'
                        style={{ background: themeMode === 'light' ? '#F9F9F9' : '#303030' }} />
                </div>
            )
        case 'MATIC':
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['ETH_MATIC'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] }}>
                    <Icon icon='ETH_MATIC' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor['ETH_MATIC'].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']} style={{ marginTop: 7, marginRight: 8 }} />
                </div>
            )

        default:
            return (
                <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor }}>
                    <Icon icon='DEFAULT_COIN' size={24} color={colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor} style={{ marginTop: 7, marginRight: 8 }} />
                </div>
            )
    }
}

CryptoCurrencyIcon.defaultProps = {
    themeMode: 'light'
}