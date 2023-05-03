import styled from "styled-components";
import styleParams from "../styles/styleParams";
import Arrow from '../assets/arrow-down.svg'

const CollapseContainer = styled.div`
    width: 100%;
    padding-bottom: 15px;
`
const TitleContainer = styled.div`
    width: 100%;
    height: 30px;
    background-color: ${styleParams.color.primary};
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    span {
        padding-left: 12px;
        color: ${styleParams.color.fontSecondary};
        font-weight: 500;
        font-size: 1.3rem;
    }
`
const ArrowBtn = styled.img`
    max-width: 32px;
    max-height: 32px;
    padding-right: 7px;
    cursor: pointer;
`
const TextContainer = styled.p`
    position: relative;
    z-index: -1;
    top: -10px;
    width: 100%;
    padding: 30px 15px 15px;
    background-color: ${styleParams.color.secondary};
    border-radius: 5px;
    font-size: 1.2rem;
`

function Collapse({ title, description }) {
    return ( 
        <CollapseContainer>
            <TitleContainer>
                <span>{title}</span>
                <ArrowBtn src={Arrow} alt="arrow down" />
            </TitleContainer>
            <TextContainer>{description}</TextContainer>
        </CollapseContainer>
    );
}

export default Collapse;