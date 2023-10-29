import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
      width: 100vw;
      height: 200vh;
      position: relative;

      display: flex;
      justify-content: space-around;
      flex-direction: column;

      background-color: var(--dark);
      color: var(--white);
`

const MainTitle = styled.h1`
font-size: var(--fontBig);
font-family: var(--fontL);

background-image: linear-gradient(-45deg, var(--gradient));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
`

const TextBlockRight = styled.div`

`

const DisplaySection = () => {
  return (
    <Section>
        <MainTitle>
            Immersive <br/> Display
        </MainTitle>
        <TextBlockRight>
              <Title>Super Retina XDR Display</Title>
              <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Animi fuga deleniti porro quasi.
              </Text>
        </TextBlockRight>
    </Section>
  )
}

export default DisplaySection