import * as React from 'react';
import Icon from '../Icon/Icon'

import CryptoIconsDict from './iconDict'

export const CryptoMonoCurrencyIcon = (props) => {

    const { currencyCode, color, style } = props

    const size = style?.fontSize || 24

    const uiData = CryptoIconsDict[currencyCode] || false

    if (uiData) {
        return (
            <Icon icon={uiData.icon} color={color} size={size} />
        )
    }

    return (
        <Icon icon='DEFAULT_COIN' size={size} color={color} />
    )
}

CryptoMonoCurrencyIcon.defaultProps = {
    color: '#404040',
    style: {
        fontSize: 24
    }
}
