import React from 'react'
import { Button } from '../Button/ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrapper, ImgWrapper, Img } from './InfoElements'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, mainImg, alt, primary, dark, dark2}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper> 
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrapper>
                                <Button to='home' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrapper>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrapper>
                            <Img src={mainImg} alt={alt} />
                        </ImgWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
