import * as React from 'react';

import iconPath from './iconsPath.json'

const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' }

const Icon = ({ size, color, icon, className, style, viewBox, arrayColors }) => {
    const styles = { ...defaultStyles, ...style }
    const path = iconPath[icon] || iconPath['USD']
    return (
        <svg
            className={className}
            style={styles}
            viewBox={viewBox}
            width={`${size}px`}
            height={`${size}px`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
        >
            {path.map((item, index) => {
                return (
                    <path key={index} fill={arrayColors ? arrayColors[index] : color ? color : item.fill} d={item.d} />
                    // fill-rule={item.fillRule ? item.fillRule : ''} clip-rule={item.clipRule ? item.clipRule : ''}
                )
            })}
        </svg>
    )
}

Icon.defaultProps = {
    size: 24,
    // color: '#000000',
    viewBox: '0 0 24 24',
    style: {},
    className: '',
}

export default Icon