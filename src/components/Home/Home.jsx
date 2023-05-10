import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import Banner from '../Banner';
import HousingCard from "../HousingCard";
import cover from '../../assets/home-pic.jpg'
import housings from '../../datas/housings.json'

const HomeContainer = styled.main`
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

const HomeList = styled.div`
    width: 100%;
    margin-bottom: 40px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    @media ${styleParams.device.laptop} {
        background-color: ${styleParams.color.secondary};
        padding: 55px 50px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        column-gap: 60px;
        row-gap: 50px;
    }
`

function Home() {
    return ( 
        <HomeContainer>
            <Banner img={cover} text="Chez vous, partout et ailleurs" />
            <HomeList>
                {housings.map(({id, title, pictures}) =>
                    <HousingCard
                        key={id}
                        img={pictures[0]}
                        title={title}
                        id={id}
                    />
                )}
            </HomeList>
        </HomeContainer>            
    );
}
    
export default Home;