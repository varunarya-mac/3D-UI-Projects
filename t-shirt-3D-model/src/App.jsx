import './App.css'
import { Canvas, } from '@react-three/fiber'
import { Center, Environment, Lightformer, OrbitControls, } from '@react-three/drei'
import Shirt from './component/Shirt'
import FrontPage from './component/FrontPage'
import { useState } from 'react'
import CustomisePage from './component/CustomisePage'
import { colors, logoArr } from './shared/color'



function App() {
  const [customise, setCustomise] = useState(false);
  const [color, setColor] = useState(colors[2]);
  const [logo, setLogo] = useState(logoArr[0]);




  return (
    <div style={{ width: '100%', height: '100%' }}>
      {!customise && <FrontPage setCustomise={setCustomise} />}
      {customise && <CustomisePage setLogo={setLogo} setCustomise={setCustomise} handleColor={setColor} />}

      <Canvas className='canvas' camera={{ position: [-1, 0, 2.5], fov: 35 }} shadows>

        <Center>
          <mesh receiveShadow position={[0, 0, -0.2]}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="#fff" />
          </mesh>
          <Shirt logo={logo} customise={customise} color={color} />
        </Center>

      </Canvas>
    </div>
  )
}

export default App
