import styled, {css} from "styled-components";
import styleParams from "../../styles/styleParams";
import { useState, useEffect } from "react";
import arrowNext from '../../assets/arrow-next.svg'
import arrowPrevious from '../../assets/arrow-previous.svg'

const GalleryContainer = styled.div`
    width: 100%;
    height: 255px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    @media ${styleParams.device.laptop} {
        height: 415px;
        border-radius: 25px;
    }
`

const PicturesContainer = styled.div`
    width: 100%;
    height: 255px;
    display: flex;
    border-radius: 10px;
    transform: translateX(calc(${(props) => props.picNum} * -100%));
    ${props => props.transitionEnabled && css`
            transition: transform 0.3s ease-in-out;
        `
    }
    @media ${styleParams.device.laptop} {
        height: 415px;
        border-radius: 25px;
    }
`
const HousingPictures = styled.img`
    min-width: 100%;
    height: 255px;
    object-fit: cover;
    border-radius: 10px;
    @media ${styleParams.device.laptop} {
        height: 415px;
        border-radius: 25px;
    }
`

const ArrowNext = styled.img`
    width: 12px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    right: 10px;
    z-index: 100;
    cursor: pointer;
    @media ${styleParams.device.laptop} {
        width: 47px;
        height: 80px;
        top: calc(50% - 40px);
        right: 20px;
    }
`
const ArrowPrevious = styled.img`
    width: 12px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    left: 10px;
    z-index: 100;
    cursor: pointer;
    @media ${styleParams.device.laptop} {
        width: 47px;
        height: 80px;
        top: calc(50% - 40px);
        left: 20px;
    }
`
const Counter = styled.div`
    display: none;
    @media ${styleParams.device.laptop} {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 100;
        bottom: 25px;
        left: calc(50% - 15px);
        font-weight: 500;
        color: ${styleParams.color.fontSecondary};
    }
`

function Gallery({ pictures }) {
    const [picNum, setPicNum] = useState(1)
    const [counterNum, setCounterNum] = useState(1)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    const extendedPictures = [].concat(pictures[pictures.length-1], pictures, pictures[0]);

    useEffect(() => {
        if (picNum === 0) {
            setCounterNum(pictures.length)
        } else if (picNum === pictures.length+1) {
            setCounterNum(1)
        } else {
            setCounterNum(picNum)
        }
    }, [picNum, pictures.length]);

    const handleNext = () => {
        setTransitionEnabled(true)
        if (picNum === pictures.length+1) {
            setPicNum(1);
        } else {
            setPicNum(picNum + 1);
        }
    };

    const handlePrevious = () => {
        setTransitionEnabled(true)
        if (picNum === 0) {
            setPicNum(pictures.length);
        } else {
            setPicNum(picNum - 1);
        }
    };

    const transitionEnd = () => {
        if (picNum === 0) {
            setTransitionEnabled(false)
            setPicNum(pictures.length)
        } else if (picNum === pictures.length+1) {
            setTransitionEnabled(false)
            setPicNum(1)
        }
        
    }

    return (
        <>
            {pictures.length > 1 ? (
                <GalleryContainer>
                    <PicturesContainer 
                        picNum={picNum} 
                        transitionEnabled={transitionEnabled}
                        onTransitionEnd={() => transitionEnd()}
                    >
                        {extendedPictures.map((picture,index) =>
                            <HousingPictures src={picture} alt="pic" key={index}/>
                        )}
                    </PicturesContainer>
                    <ArrowNext 
                        src={arrowNext}
                        onClick={handleNext}
                    />
                    <ArrowPrevious 
                        src={arrowPrevious}
                        onClick={handlePrevious}
                    />
                    <Counter>
                        <p>{`${counterNum}/${pictures.length}`}</p>
                    </Counter>
                </GalleryContainer>
            ) : (
                <GalleryContainer>
                    <HousingPictures src={pictures[0]} />
                </GalleryContainer>
            )}
        </>
    );
}

export default Gallery;