import * as React from 'react';
import Icon from '../Icon/Icon'

export const FiatMonoCurrencyIcon = (props) => {

    const { currencyCode, color } = props

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
                <>
                    <Icon icon={currencyCode} size={24} color={color} />
                </>
            )

        default:
            return (
                <>
                    <Icon icon='FIAT_DEFAULT' size={24} color={color} />
                </>
            )
    }
}

FiatMonoCurrencyIcon.defaultProps = {
    color: '#404040'
}