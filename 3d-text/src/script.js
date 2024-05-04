import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import { FontLoader } from 'three/examples/jsm/Addons.js'
import { TextGeometry } from 'three/examples/jsm/Addons.js'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('/textures/matcaps/1.png')

/**
 * Fonts
 */
const fontLoder = new FontLoader();
fontLoder.load(
    '/font/helvetiker_regular.typeface.json',
    (font) => {
        const textGeometry = new TextGeometry(
            'Three.js Journey',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 4,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        );
// It is to move the text to the center. Below is for basic understanding how to move the text to the center.
// this is the one way to move the text to the center. 
        // textGeometry.computeBoundingBox();
        // textGeometry.translate(
        //     -textGeometry.boundingBox.max.x / 2,
        //     -textGeometry.boundingBox.max.y / 2,
        //     -textGeometry.boundingBox.max.z / 2
        // );

        // this is the way to move text to the center. above one is to udesratnd how it works center.
        textGeometry.center();

        const material = new THREE.MeshMatcapMaterial();
        matcapTexture.encoding = THREE.sRGBEncoding;
        material.matcap = matcapTexture;
        
        // textMaterial.wireframe = true;
        const text = new THREE.Mesh(textGeometry, material);
        scene.add(text);

        // add donuts
        const torusGeometry = new THREE.TorusGeometry(0.3, 0.2, 16, 100);

        for(let i = 0; i < 200; i++) {
            const mesh = new THREE.Mesh(torusGeometry, material);
            mesh.position.x = (Math.random() - 0.5) * 20;
            mesh.position.y = (Math.random() - 0.5) * 20;
            mesh.position.z = (Math.random() - 0.5) * 20;
            mesh.rotation.x = Math.random() * Math.PI;
            mesh.rotation.y = Math.random() * Math.PI;
            const scale = Math.random();
            mesh.scale.set(scale, scale, scale);
            scene.add(mesh); 
        }
    }
)

/**
 * Object
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial()
// )

// scene.add(cube)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()