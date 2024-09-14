import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import Shirt from "./component/Shirt";
import FrontPage from "./component/FrontPage";
import { useState } from "react";
import CustomisePage from "./component/CustomisePage";
import { colors, logoArr } from "./shared/color";

function App() {
  const [customise, setCustomise] = useState(false);
  const [color, setColor] = useState(colors[2]);
  const [logo, setLogo] = useState(logoArr[0]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="site-icon-container" title="Hover text for the div">
        <img className="site-icon" src="../three.png" alt="React+three.js" />
        <img className="site-icon" src="../react.png" alt="React+three.js" />
      </div>
      {!customise && <FrontPage setCustomise={setCustomise} />}
      {customise && (
        <CustomisePage
          setLogo={setLogo}
          setCustomise={setCustomise}
          handleColor={setColor}
        />
      )}

      <Canvas
        className="canvas"
        camera={{ position: [-0.5, 0, 2.5], fov: 20 }}
        shadows
      >
        <Center>
          <mesh receiveShadow position={[-0.3, 0, -0.2]}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" color="#fff" />
          </mesh>
          <Shirt logo={logo} customise={customise} color={color} />
        </Center>
      </Canvas>
    </div>
  );
}

export default App;
