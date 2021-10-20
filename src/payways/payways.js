import React from 'react'

import Icon from '../Icon/Icon'
import Colors from './colors'

export const PaywayIcon = (props) => {

    const {
        paywayCode,
        selected,
        selectedColor,
        checked,
        checkedColor,
        fail,
        failColor,
        size,
        mode
    } = props

    const code = paywayCode ? paywayCode.toString().toUpperCase() : ''

    switch (code) {
        case 'CARD':
        case 'QIWI':
        case 'PAYEER':
        case 'PERFECT_MONEY':
        case 'BANK_TRANSFER':
            return (
                <div>
                    <Icon icon={code} color={checked ? checkedColor : fail ? failColor : selected ? selectedColor : ''} size={size || 36}
                        arrayColors={!checked && !fail && !selected ? Colors[code][mode] : null}
                    />
                </div>
            )

        case 'MOBILE_PHONE':
            return (
                <div>
                    {checked || fail ?
                        <Icon icon='MOBILESELECT' color={checked ? checked : fail ? fail : selected ? selectedColor : ''} size={size || 40} /> :
                        <Icon icon='MOBILE' color={checked ? checked : fail ? fail : selected ? selectedColor : ''} size={size || 40}
                            arrayColors={!checked && !fail && !selected ? Colors['MOBILE_PHONE'][mode] : null}
                        />}
                </div>
            )

        case 'ADVCASH':
            return (
                <div>
                    <Icon icon='ADVCASH' color={checked ? checked : fail ? fail : selected ? selectedColor : ''} size={size || 34}
                        arrayColors={!checked && !fail && !selected ? Colors['ADVCASH'][mode] : null}
                    />
                </div>
            )

        case 'YANDEX_MONEY':
        case 'WEBMONEY':
        case 'CAPITALIST':
            return (
                <div>
                    <Icon icon={code} color={checked ? checked : fail ? fail : selected ? selectedColor : ''} size={size || 40}
                        arrayColors={!checked && !fail && !selected ? Colors[code][mode] : null}
                    />
                </div>
            )

        default:
            return (
                <div>
                    <Icon icon='GENERAL_PAYMENT' color={checked ? checked : fail ? fail : selected ? selectedColor : ''} size={size || 36} />
                </div>
            )
    }
}

PaywayIcon.defaultProps = {
    mode: 'light'
}
