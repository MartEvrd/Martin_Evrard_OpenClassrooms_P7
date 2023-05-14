import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import { useParams } from "react-router-dom";
import housings from '../../datas/housings.json';
import HeaderInfos from "./HeaderInfos";
import HeaderRateHost from './HeaderRateHost'


const HousingContainer = styled.main`
    margin: 0 auto;
    padding: ${styleParams.borderPadding.mobile};
    width: 100%;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    @media ${styleParams.device.laptop} {
        padding: ${styleParams.borderPadding.laptop};
        padding-top: 50px;
    } 
`
const CoverPic = styled.img`
// !!!!! RETIRER APRES INTEGRATION DU CAROUSSEL !!!!
    width: 100%;
    height: 255px;
    object-fit: cover;
    @media ${styleParams.device.laptop} {
        height: 415px;
    } 
`
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px 0px;
    @media ${styleParams.device.laptop} {
        flex-direction: row;
        margin: 25px 0px;
    }
`



function Housing() {
    const {id} = useParams()
    const houseDatas = housings.find(
        (house) => house.id === id
    )
    return (
            <HousingContainer>
                <CoverPic src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
                <HeaderContainer>
                    <HeaderInfos
                        title={houseDatas.title}
                        location={houseDatas.location}
                        tags={houseDatas.tags}
                    />
                    <HeaderRateHost 
                        rating={Number(houseDatas.rating)}
                        hostName={houseDatas.host.name}
                        hostPic={houseDatas.host.picture}
                    />

                </HeaderContainer>
            
            </HousingContainer>
    );
}

export default Housing;