

import { useGLTF, Decal } from '@react-three/drei'
import PropTypes from 'prop-types';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { easing } from 'maath';
import { useTexture, useHelper } from '@react-three/drei';
import * as THREE from 'three';

const Shirt = (props) => {

  const { color, customise, logo } = props;
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('../../shirt.glb')
  const dirL = useRef();

  //Helper function to add a light helper
  // useHelper(dirL, THREE.DirectionalLightHelper, 0.1, 'red');  

  // Load the texture
  const texture = useTexture(logo);
  useFrame((state, delta) => {
    if (groupRef.current) {
      if (customise) {
        const cameraPosition = [-state.viewport.width / 5, 0, 1.5];

        easing.damp3(
          state.camera.position,
          cameraPosition,
          0.25,
          delta
        )
        easing.dampE(
          groupRef.current.rotation,
          [-state.pointer.y / 10, state.pointer.x * Math.PI / 6, 0],
          0.30,
          delta
        )
      }

    }
  });

  return (
    <group castShadow ref={groupRef}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      >
        <meshStandardMaterial attach="material" color={color} />
        <Decal
          position={[-0.01, 0.04, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.15, 0.1, 0.1]}
          opacity={0.5}
          map={texture}

        />
      </mesh>
    
      <ambientLight intensity={1} />
      <directionalLight castShadow
        ref={dirL}
        // rotation={[Math.PI / 2, 0, 0]}
        // position={[0, 0, -0.14]}
        shadow-mapSize-={[512, 512]}  // Increase shadow map size
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
        intensity={3} 
        position={[0, 0.2, 1]} />

    </group>
  )
}



export default Shirt;

Shirt.propTypes = {
  color: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  customise: PropTypes.bool.isRequired,
};

useGLTF.preload('../../shirt.glb')