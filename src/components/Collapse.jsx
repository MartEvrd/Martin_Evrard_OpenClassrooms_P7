import styled, {css} from "styled-components";
import styleParams from "../styles/styleParams";
import Arrow from '../assets/arrow-down.svg'
import { useState } from "react";

const CollapseContainer = styled.div`
    width: 100%;
    padding-bottom: 15px;
    @media ${styleParams.device.laptop} {
        max-width: 1024px;
    }
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
    @media ${styleParams.device.laptop} {
        height: 50px;
        border-radius: 10px;
    }
    span {
        padding-left: 12px;
        color: ${styleParams.color.fontSecondary};
        font-weight: 500;
        font-size: 1.3rem;
        @media ${styleParams.device.laptop} {
            font-size: 1.8rem;
            padding-left: 20px;
        }
    }
`
const ArrowBtn = styled.img`
    max-width: 32px;
    max-height: 32px;
    padding: 0px 7px;
    transform: rotate(180deg);
    transition: transform 0.5s ease-in-out;
    ${(props) => props.isOpen && css`
        transform: rotate(0deg);
    `};
    cursor: pointer;
    @media ${styleParams.device.laptop} {
        min-height: 45px;
        min-width: 45px;
    }
`
const TextContainer = styled.div`
    position: relative;
    z-index: -1;
    top: -10px;
    width: 100%;
    background-color: ${styleParams.color.secondary};
    border-radius: 5px;
    font-size: 1.2rem;
    line-height: 18px;
    overflow: hidden;
    max-height: 0px;
    transition: max-height 0.5s ease-in-out;
    ${(props) => props.isOpen && css`
        height: auto;
        max-height: 250px;
    `};
    p {
        padding: 30px 15px 15px;
    }
    ul {
        padding: 30px 15px 15px;
        line-height: 20px;
        @media ${styleParams.device.laptop} {
            line-height: 35px
        }
    }
    @media ${styleParams.device.laptop} {
        font-size: 1.8rem;
        border-radius: 10px;
        line-height: 25px;
    }
`

function Collapse({ title, description }) {

    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <CollapseContainer>
            <TitleContainer>
                <span>{title}</span>
                <ArrowBtn src={Arrow} alt="arrow down" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
            </TitleContainer>
            <TextContainer isOpen={isOpen}>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((equipment,index) =>
                            <li key={index}>{equipment}</li>
                        )}
                    </ul>
                ):(
                    <p>{description}</p>
                )}
                
            </TextContainer>
        </CollapseContainer>
    )
}
export default Collapse;