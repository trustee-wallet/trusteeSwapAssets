export function currencyType(currencyType) {

    if (currencyType.toString().indexOf('ETH') !== -1) {
        return 'ETH_ADDRESS'
    }

    if (currencyType.toString().indexOf('TRX') !== -1) {
        return 'TRX_ADDRESS'
    }

    switch (currencyType) {
        case 'LTC':
            return (
                'LTC_ADDRESS'
            )
        case 'XRP':
            return (
                'XRP_ADDRESS'
            )
        case 'BTC':
        case 'USDT':
        case 'BSV':
            return (
                'BTC_ADDRESS'
            )
        case 'BTH':
            return (
                'BTH_ADDRESS'
            )
        case 'DOGE':
            return (
                'DOGE_ADDRESS'
            )
        case 'XMR':
            return (
                'XMR_ADDRESS'
            )
        default:
            return null
    }
}