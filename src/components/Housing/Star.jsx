import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import EmptyStarIcon from "../../assets/empty-star.svg";
import FullStarIcon from "../../assets/full-star.svg";

const StarComp = styled.img`
    width: 15px;
    height: 15px;
    @media ${styleParams.device.laptop} {
        width: 25px;
        height: 25px;
    }
`

function Star({type}) {

    return ( 
        <>
            <StarComp src={type === "empty" ? EmptyStarIcon : FullStarIcon} />
        </>
    );
}

export default Star;