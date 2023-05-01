const size = {
    mobile: '320px',
    tablet: '769px',
    laptop: '1025px',
}

const styleParams = {
    color: {
        primary: '#FF6060',
        secondary: '#F6F6F6',
        tertiary: '#000',

        fontPrimary: '#FF6060',
        fontSecondary: '#FFF',

        bgStandard: '#FFF',
        bgFooter: '#000',

        cardsBorder: '#70D5AB',
        emptyStars: '#E3E3E3',
        profilePic: '#C4C4C4'
    },
    device: {
        mobile: `screen and (min-width: ${size.mobile})`,
        tablet: `screen and (min-width: ${size.tablet})`,
        laptop: `screen and (min-width: ${size.laptop})`,
    },
    font: {
        standard: `font`
    }
}

export default styleParams