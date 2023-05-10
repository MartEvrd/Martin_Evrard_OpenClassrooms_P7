import styled from "styled-components";
import styleParams from "../../styles/styleParams";
import cover from '../../assets/about-pic.jpg'
import about from '../../datas/about.json'
import Collapse from "../Collapse";
import Banner from "../Banner";

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
function About() {
    return (
        <AboutContainer>
            <Banner img={cover} />
            {about.map(({title, description}, index) =>
                <Collapse key={`${title}-${index}`} title={title} description={description}/>
            )}
        </AboutContainer>
    );
}

export default About;