import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Model3 } from '../components/Scene3'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Section = styled.div`
      width: 100vw;
      height: 100vh;
      position: relative;
      z-index: 1;

      background-color: var(--white);
      overflow: hidden;
` 

const Phone = styled.div`
      width: 100%;
      height: 70%;
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: relative;
      cursor: grab;
`

const Colors = styled.ul`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: absolute;
      left: 35%;
      top: 50%;
      transform: translate(-50%, -50%);
`

 const Color = styled.li`
      list-style: none;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;

      border-radius: 50%;
      background-color: ${props => props.color};
      margin: 0.5rem;

      border: 1px solid var(--dark);
`
      

const PricingSection = () => {

      const { materials } = useGLTF('/scene.gltf');

      let updateColor = (color) => {

            materials.Body.color.set(color);


     }

  return (
    <Section>
            <Phone>
                  <Canvas camera={{ fov:14 }} >
                        <ambientLight intensity={1} />
                        <directionalLight intensity={0.4} />
                        <Suspense  fallback={null} >
                        <Model3 />
                        </Suspense>

                        <OrbitControls enableZoom={false} />
                  </Canvas>

                  <Colors>
                        <Color color="#9BB5CE"  onClick={() => updateColor("#9BB5CE")}/>
                        <Color color="#F9E5C9"  onClick={() => updateColor("#F9E5C9")}/>
                        <Color color="#505F4E"  onClick={() => updateColor("#505F4E")}/>
                        <Color color="#574f6f"    onClick={() => updateColor("#574f6f")}/>
                        <Color color="#A50011"  onClick={() => updateColor("#A50011")}/>
                        <Color color="#215E7C"  onClick={() => updateColor("#215E7C")}/>
                  </Colors>
            </Phone>
    </Section>
  )
}

export default PricingSection