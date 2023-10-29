import React from 'react'
import styled from 'styled-components'
import a15 from "../assets/Images/A15-Bionic.jpg"

const Section = styled.section`
      width: 100vw;
      height: 100vh;
      position: relative;

      display: flex;
      justify-content: flex-start;
      align-items: center;

      background-color: var(--dark);
      color: var(--white);
      overflow: hidden;
`

const Title = styled.h1`
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      font-size: var(--fontBig);
      font-family: var(--fontL);
      z-index: 1;

      background-image: linear-gradient(90deg, var(--gradient));
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
`

const Processor = styled.div`
      width: 25%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      justify-content: center;
      align-items: center;

      img{
            width: 100%;
            height: auto;
      }
`

const ProcessorSection = () => {
  return (
    <Section>
       <Title>Fastest Processor</Title>
       <Processor>
            <img src={a15} alt="A15 processor" />
       </Processor>
    </Section>
  )
}

export default ProcessorSection