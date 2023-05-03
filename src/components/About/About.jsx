import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import Cover from '../../assets/about-pic.jpg'
import about from '../../datas/about.json'
import Collapse from "../Collapse";

const AboutContainer = styled.main`
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
const AboutCover = styled.img`
    height: 225px;
    padding-bottom: 20px;
    border-radius: 10px;
    width: 100%;
    filter: brightness(70%);
    object-fit: cover;
`

function About() {
    return ( 
        <AboutContainer>
            <AboutCover src={Cover} alt="Country and landscapes" />
            {about.map(({title, description}, index) =>
                <Collapse key={`${title}-${index}`} title={title} description={description}/>
            )}
        </AboutContainer>
    );
}

export default About;