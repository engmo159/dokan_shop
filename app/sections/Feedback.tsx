'use client'
import styled from 'styled-components'
import ContainerSection from '../components/Container'
import FormSection from '../components/FormSection'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const Feedback = () => {
  const StyledH3 = styled.h3`
    color: var(--sec-color);
  `
  const StyledP = styled.p`
    color: var(--p-color);
  `
  return (
    <ContainerSection>
      <Heading>Feedback</Heading>
      <Paragraph>
        We Will Be Very Happy , If You Submit You Feedback For Any Other Special
        Request
      </Paragraph>
      <div className='row d-flex justify-content-evenly'>
        <div className='col-8 '>
          <FormSection />
        </div>
        <div className='col-2 text-start d-flex flex-column justify-content-evenly'>
          <div className=''>
            <StyledH3 className='fs-4 fw-semibold text-decoration-underline'>
              Address :
            </StyledH3>
            <StyledP className=''>16.B ElMariotia, Faisal Giza, Egypt </StyledP>
          </div>
          <div>
            <StyledH3 className='fs-4 fw-semibold text-decoration-underline'>
              E-Mail :
            </StyledH3>
            <StyledP>Dokanshop@Company.Com</StyledP>
          </div>
          <div>
            <StyledH3 className='fs-4 fw-semibold text-nowrap text-decoration-underline'>
              Mobile Number :
            </StyledH3>
            <StyledP>+20-11-195-544-63</StyledP>
          </div>
        </div>
      </div>
    </ContainerSection>
  )
}

export default Feedback
