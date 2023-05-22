import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import { Link } from "react-router-dom";

const Card = styled(Link)`
    width: 100%;
    height: 255px;
    position: relative;
    border-radius: 10px;
    background-size: cover;
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props => props.img});
    @media ${styleParams.device.tablet} {
        max-width: 250px;
        height: 250px;
    }
    @media ${styleParams.device.laptop} {
        max-width: 340px;
        height: 340px;
    }
    &:hover {
        box-shadow:rgba(0, 0, 0, 0.5) 0px 8px 15px 1px;
    }
`
const CardTxt = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 100;
    font-weight: 500;
    padding: 0px 20px 20px;
    display: flex;
    justify-content: start;
    align-items: end;
    line-height: 25px;
    color: ${styleParams.color.fontSecondary};
`
function HousingCard({ img, title, id }) {
    return (
        <>
            <Card to={`/housing/${id}`} img={img}>
                <CardTxt>
                    <p>{title}</p>
                </CardTxt>
            </Card>
        </>
    );
}

export default HousingCard;