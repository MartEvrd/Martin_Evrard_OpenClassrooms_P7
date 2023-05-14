import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import Star from "./Star";

const RateHostContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${styleParams.device.laptop} {
        flex-direction: column-reverse;
        align-items: flex-end;
        row-gap: 25px;
        width: auto;
    } 
`
const StarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 6px;
    @media ${styleParams.device.laptop} {
        column-gap: 15px;
    }
`
const HostContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    column-gap: 11px;
`
const HostName = styled.div`
    max-width: 95px;
    text-align: right;
    font-size: 1.2rem;
    @media ${styleParams.device.laptop} {
        font-size: 1.8rem;
    }
`
const HostPic = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    @media ${styleParams.device.laptop} {
        width: 64px;
        height: 64px;
    }
`
function HeaderRateHost({ rating, hostName, hostPic }) {

    return (
        <RateHostContainer>
            <StarContainer>
                {rating === 5 ? (
                    [...Array(rating)].map((_, index) => <Star type="full" key={index} />)
                ) : (
                    [...Array(rating)].map((_, index) => <Star type="full" key={`full-${index}`} />)
                    .concat([...Array(5-rating)].map((_, index) => <Star type="empty" key={`empty-${index}`} />))
                )}
            </StarContainer>
            <HostContainer>
                <HostName>{hostName}</HostName>
                <HostPic src={hostPic} alt="Image du profil"/>
            </HostContainer>
        </RateHostContainer>
    );
}

export default HeaderRateHost;