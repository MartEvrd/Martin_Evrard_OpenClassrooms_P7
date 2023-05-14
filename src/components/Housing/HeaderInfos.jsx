import styled from "styled-components";
import styleParams from "../../styles/styleParams";

const HeaderInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

const HousingTitle = styled.h1`
    width: 100%;
    padding-bottom: 5px;
    font-weight: 500;
    text-align: left;
    line-height: 25px;
    @media ${styleParams.device.laptop} {
        font-size: 3.6rem;
        line-height: 50px;
    }
`
const HousingLocation = styled.p`
    width: 100%;
    padding-bottom: 10px;
    font-size: 1.4rem;
    text-align: left;
    line-height: 20px;
    @media ${styleParams.device.laptop} {
        font-size: 1.8rem;
        padding-bottom: 25px;
    }
`
const HousingTagsContainer = styled.div`
    width: 100%;
    padding-bottom: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
`
const Tag = styled.div`
    min-width: 84px;
    height: 18px;
    padding: 3px 18px;
    border-radius: 5px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${styleParams.color.primary};
    color: ${styleParams.color.fontSecondary};
    @media ${styleParams.device.laptop} {
        min-width: 115px;
        font-size: 1.4rem;
        border-radius: 10px;
        padding: 12px 30px;
    }
`

function HeaderInfos({ title, location, tags}) {
    return ( 
        <HeaderInfosContainer>
            <HousingTitle>{title}</HousingTitle>
            <HousingLocation>{location}</HousingLocation>
            <HousingTagsContainer>
                {tags.map((tag, index) =>
                    <Tag key={`${tag}-${index}`}>{tag}</Tag>
                )}
            </HousingTagsContainer>
        </HeaderInfosContainer>
    );
}

export default HeaderInfos;