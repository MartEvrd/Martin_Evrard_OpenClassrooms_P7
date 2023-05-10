import styled from "styled-components";
import styleParams from "../styles/styleParams";

const Cover = styled.div`
    width: 100%;
    height: 115px;
    margin-bottom: 20px;
    border-radius: 10px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), url(${props => props.img});
    @media ${styleParams.device.laptop} {
        height: 225px;
        margin-bottom: 40px;
        border-radius: 25px;
    }
`

const CoverText = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 100;
    font-weight: 500;
    font-size: 2.4rem;
    padding: 0px 16px;
    color: ${styleParams.color.fontSecondary};
    display: flex;
    justify-content: start;
    align-items: center;
    @media ${styleParams.device.laptop} {
        font-size: 4.8rem;
        justify-content: center;
        padding: 0px 25px;
        text-align: center;
    }
`

function Banner({ img, text }) {
    return ( 
        <Cover img={img}>
            <CoverText>
                <p>{text}</p>
            </CoverText>
        </Cover>
    );
}

export default Banner;