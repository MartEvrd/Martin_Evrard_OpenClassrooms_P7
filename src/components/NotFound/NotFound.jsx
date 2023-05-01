import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ErrContainer = styled.div`
    font-weight: 500;
    width: 100%;
    margin: 200px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & span {
        font-weight: 700;
        font-size: 9.6rem;
    }
    & p {
        text-align: center;
    }
`
const Home = styled(Link)`
    font-weight: 500;
    font-size: 1.4rem;
    margin: 0px auto;
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