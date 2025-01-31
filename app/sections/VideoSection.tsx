/* eslint-disable react/no-unescaped-entities */
'use client'

import styled from 'styled-components'
import Paragraph from '../components/Paragraph'
import ContainerSection from '../components/ContainerSection'

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
    padding: 0 0.5rem 0 0.5rem;
  }
`
const StyledH = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 3px;
`

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
`
const VideoSection = () => {
  return (
    <StyledDiv>
      <ContainerSection>
        <StyledH className='fw-bold '>Dokan Shop Store</StyledH>
        <Paragraph>This Is Our Store In Real, Don't Miss To Visit Us</Paragraph>
        <StyledVideo
          width='640'
          height='360'
          controls
          preload='none'
          muted
          poster='images/accessories-001.jpg'
        >
          <source src='video/videoplayback.mp4' type='video/mp4' />
        </StyledVideo>
      </ContainerSection>
    </StyledDiv>
  )
}

export default VideoSection
