import { Link } from "react-router-dom";
import styled from "styled-components";
import styleParams from "../../styles/styleParams";

const NotFoundContainer = styled.main`
    margin: 0 auto;
    padding: ${styleParams.borderPadding.mobile};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media ${styleParams.device.laptop} {
        padding: ${styleParams.borderPadding.laptop};
    }
`

const ErrContainer = styled.div`
    font-weight: 500;
    width: 100%;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
        font-weight: 700;
        font-size: 9.6rem;
        @media ${styleParams.device.laptop} {
            font-size: 28.8rem;
        }
    }
    & p {
        text-align: center;
        @media ${styleParams.device.laptop} {
            font-size: 3.6rem;
        }
    }
`
const Home = styled(Link)`
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0px auto;
    padding: 70px 0px;
    @media ${styleParams.device.laptop} {
            font-size: 1.8rem;
        }
    &:hover{
        text-decoration: underline;
    }
`
function NotFound() {
    return ( 
        <NotFoundContainer>
            <ErrContainer>
                <span>404</span>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </ErrContainer>
            
            <Home to='/'>Retourner sur la page d'accueil</Home>
        </NotFoundContainer>
    )
}

export default NotFound;