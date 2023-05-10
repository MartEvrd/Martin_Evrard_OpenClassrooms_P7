const size = {
    mobile: '320px',
    tablet: '769px',
    laptop: '1025px',
}

const bordersPadding = {
    mobile: '20px',
    tablet: '20px',
    laptop: '100px',
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

        emptyStars: '#E3E3E3',
        profilePic: '#C4C4C4'
    },
    device: {
        mobile: `screen and (min-width: ${size.mobile})`,
        tablet: `screen and (min-width: ${size.tablet})`,
        laptop: `screen and (min-width: ${size.laptop})`,
    },
    borderPadding: {
        mobile: `0px ${bordersPadding.mobile}`,
        tablet: `0px ${bordersPadding.tablet}`,
        laptop: `0px ${bordersPadding.laptop}`,
    },
    headerHeight: {
        mobile: '70px',
        tablet: '70px',
        laptop: '110px',
    },
    footerHeight: '210px',
}

export default styleParams