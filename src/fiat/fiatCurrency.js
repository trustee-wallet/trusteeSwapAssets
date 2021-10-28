import * as React from 'react';
import '../styles/currency.css'
import Icon from '../Icon/Icon'
import UiColor from '../styles/UiColor'

export const FiatCurrencyIcon = (props) => {
    const {
        currencyCode,
        colorNotActive,
        checked,
        checkedColor,
        themeMode,
        setBackground,
        iconStyle
    } = props

    const defaultColor = themeMode === 'light' ? '#404040' : '#DADADA'

    const sizeIcon = iconStyle?.fontSize || 24

    switch (currencyCode) {
        case 'UAH':
        case 'RUB':
        case 'USD':
        case 'KZT':
        case 'EUR':
        case 'GBP':
        case 'TRY':
        case 'AUD':
        case 'BGN':
        case 'BRL':
        case 'CAD':
        case 'CHF':
        case 'CNY':
        case 'COP':
        case 'CZK':
        case 'DKK':
        case 'DOP':
        case 'EGP':
        case 'HKD':
        case 'HRK':
        case 'IDR':
        case 'ILS':
        case 'JOD':
        case 'JPY':
        case 'KES':
        case 'KRW':
        case 'KWD':
        case 'LKR':
        case 'MAD':
        case 'MXN':
        case 'MYR':
        case 'NGN':
        case 'NOK':
        case 'NZD':
        case 'OMR':
        case 'PEN':
        case 'PKR':
        case 'PLN':
        case 'RON':
        case 'SEK':
        case 'SGD':
        case 'THB':
        case 'TWD':
        case 'VND':
        case 'ZAR':
            return (
                <div className='currency-circle' style={{
                    background: setBackground ? UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor'] + '26' : '',
                    border: setBackground ? 'none' : `2px solid ${colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}`
                }}
                >
                    <Icon
                        icon={currencyCode}
                        size={sizeIcon}
                        color={colorNotActive ? colorNotActive : checked ? checkedColor : UiColor[currencyCode].colors[themeMode === 'light' ? 'mainColor' : 'darkColor']}
                        style={iconStyle}
                    />
                </div>
            )

        default:
            return (
                <div
                    className='currency-circle'
                    style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor }}>
                    <Icon
                        icon='FIAT_DEFAULT'
                        size={sizeIcon}
                        color={colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor}
                        style={iconStyle}
                    />
                </div>
            )
    }
}

FiatCurrencyIcon.defaultProps = {
    themeMode: 'light'
}