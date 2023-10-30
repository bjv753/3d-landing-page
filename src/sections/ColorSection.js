import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
      width: 100vw;
      height: 100vh;
      position: relative;

      display: flex;
      justify-content: space-between;
      align-items: center;
`

const Left = styled.section`
width: 50%;
height: 100%;

display: flex;
background-color: rgba(155, 181, 206, 0.8);
position: relative;
`
const Right = styled.section`
width: 50%;
height: 100%;

display: flex;
background-color: rgba(155, 181, 206, 0.4);
position: relative;
`

const Center = styled.div`
width: 100%;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const ColorSection = () => {
  return (
    <Section>
            <Left/>
            <Center>Sierra Blue</Center>
            <Right/>
    </Section>
  )
}

export default ColorSection