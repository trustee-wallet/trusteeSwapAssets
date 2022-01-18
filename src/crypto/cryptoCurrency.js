import * as React from 'react';

import '../styles/currency.css'
import Icon from '../Icon/Icon'

import CryptoIconsDict from './iconDict'

export const CryptoCurrencyIcon = (props) => {
    const {
        currencyCode,
        colorNotActive,
        style,
        checked,
        checkedColor,
        themeMode,
        setBackground,
        iconStyle,
        tokenIconStyle
    } = props

    const defaultColor = themeMode === 'light' ? '#404040' : '#DADADA'

    const sizeIcon = iconStyle?.fontSize || 24
    const tokenIconSize = tokenIconStyle?.fontSize || 16

    const getCurrencyIcon = (code) => {
        const uiData = CryptoIconsDict[code] || false

        const mainColor = uiData[themeMode === 'light' ? 'mainColor' : 'darkColor']

        if (uiData) {
            if (uiData.isToken) {
                const blockchainColor = CryptoIconsDict[uiData.blockchainSymbol][themeMode === 'light' ? 'mainColor' : 'darkColor']
                return (
                    <>
                        <div className='currency-circle' style={{
                            background: setBackground ? mainColor + '26' : '',
                            border: setBackground ? 'none' : `2px solid ${colorNotActive ? colorNotActive : checked ? checkedColor : mainColor}`
                        }}>
                            <Icon
                                icon={uiData?.checkedIcon || uiData.icon}
                                size={sizeIcon}
                                color={colorNotActive ? colorNotActive : checked ? checkedColor : mainColor}
                                style={iconStyle}
                            />
                        </div>
                        <Icon
                            icon={uiData.blockchainSymbol}
                            size={tokenIconSize}
                            color={colorNotActive ? colorNotActive : blockchainColor}
                            className='currecny-little-circle'
                            style={tokenIconStyle}
                        />
                    </>
                )
            }
            if (code === 'BTG') {
                return (
                    <div className='currency-circle'
                        style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : mainColor }}>
                        <div className='btg'
                            style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : '#E1A600' }}>
                            <Icon
                                icon={uiData.icon}
                                size={20}
                                color={colorNotActive ? colorNotActive : checked ? checkedColor : mainColor}
                                style={style ? style : iconStyle}
                            />
                        </div>
                    </div>
                )
            }
            return (
                <div className='currency-circle' style={{
                    background: setBackground ? mainColor + '26' : '',
                    border: setBackground ? 'none' : `2px solid ${colorNotActive ? colorNotActive : checked ? checkedColor : mainColor}`
                }}>
                    <Icon
                        icon={uiData?.checkedIcon || uiData.icon}
                        size={sizeIcon}
                        color={colorNotActive ? colorNotActive : checked ? checkedColor: mainColor}
                        style={iconStyle}
                    />
                </div>
            )
        }

        return (
            <div className='currency-circle' style={{ borderColor: colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor }}>
                <Icon
                    icon='DEFAULT_COIN'
                    size={24}
                    color={colorNotActive ? colorNotActive : checked ? checkedColor : defaultColor}
                    style={{ marginTop: 7, marginRight: 8 }}
                />
            </div>
        )
    }

    return (
        <>
            {getCurrencyIcon(currencyCode)}
        </>
    )


}

CryptoCurrencyIcon.defaultProps = {
    themeMode: 'light',
    tokenIconStyle: {},
    iconStyle: {}
}