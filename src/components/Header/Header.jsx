import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import { Link } from "react-router-dom";
import Logo from '../../assets/kasa-logo.svg'

const NavbarContainer = styled.header`
    margin: 0 auto;
    padding: ${styleParams.borderPadding.mobile};
    padding-top: 20px;
    width: 100%;
    height: ${styleParams.headerHeight.mobile};
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${styleParams.device.laptop} {
        padding: ${styleParams.borderPadding.laptop};
        padding-top: 40px;
        height: ${styleParams.headerHeight.laptop};
    }
    & img {
        width: 145px;
        @media ${styleParams.device.laptop} {
        width: 210px;
    }
    }
`
const NavbarLinkContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    @media ${styleParams.device.laptop} {
        column-gap: 60px;
    }
`

const NavbarLink = styled(Link)`
    font-size: 1.2rem;
    font-weight: 500;
    @media ${styleParams.device.laptop} {
        font-size: 2.4rem;
    }
    &:hover{
        text-decoration: underline;
    }
`

function Header() {
    return ( 
        <NavbarContainer>
            <img src={Logo} alt="Logo kasa standard" />
            <NavbarLinkContainer>
                <NavbarLink to="/">
                    ACCUEIL
                </NavbarLink>
                <NavbarLink to="/about">
                    A PROPOS
                </NavbarLink>
            </NavbarLinkContainer>
        </NavbarContainer>
    );
}

export default Header