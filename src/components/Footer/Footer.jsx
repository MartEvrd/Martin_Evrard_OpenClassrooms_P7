import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import Logo from '../../assets/kasa-logo-white.svg'

const FooterContainer = styled.footer`
    margin: 0 auto;
    padding: 0px;
    width: 100%;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${styleParams.color.bgFooter};
    & img {
        width: 125px;
    }
    & p {
        padding-top: 35px;
        color: ${styleParams.color.fontSecondary};
        font-size: 1.2rem;
        font-weight: 500;
        @media ${styleParams.device.laptop} {
            font-size: 2.4rem;
        }
    }
`
function Footer() {
    return ( 
        <FooterContainer>
            <img src={Logo} alt="white kasa logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </FooterContainer>        
    );
}

export default Footer;