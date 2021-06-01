import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r127/examples/jsm/loaders/GLTFLoader.js";

let renderer, camera;
let scene, raycaster, mouse;
let container, controls;

let objectsToRemove = [];
const onMeshClick = event => {
    console.log('clicked', event);
    event.preventDefault();

    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    console.log('intersects are: ', intersects);



    intersects.map(item => {
        console.log(item.object);
    });

    // if (intersects.length > 0) {
    //     console.log("Intersection:", intersects[0]);
    //
    //     const face = intersects[0].face;
    //
    //     const linePosition = line.geometry.attributes.position;
    //     const meshPosition = intersects[0].object.geometry.attributes.position;
    //
    //     linePosition.copyAt( 0, meshPosition, face.a );
    //     linePosition.copyAt( 1, meshPosition, face.b );
    //     linePosition.copyAt( 2, meshPosition, face.c );
    //     linePosition.copyAt( 3, meshPosition, face.a );
    //
    //     mesh.updateMatrix();
    //
    //     line.geometry.applyMatrix4( mesh.matrix );
    //
    //     line.visible = true;
    //
    // } else {
    //     console.log('inside else');
    // }
}
const main = () => {
    container = document.getElementById("root");
    const fov = 100;
    const aspect = 1; // the canvas default
    const near = 0.1;
    const far = 100;
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 60, 0);

    controls = new OrbitControls(camera, container);
    controls.addEventListener('change', renderMap);
    controls.target.set(0, 5, 0);
    controls.update();

    scene = new THREE.Scene();
    scene.background = new THREE.Color("white");

    {
        const skyColor = 0xb1e1ff; // light blue
        const groundColor = 0xb97a20; // brownish orange
        const intensity = 1;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        scene.add(light);
    }

    {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(0, 10, 0);
        light.target.position.set(-5, 0, 0);
        scene.add(light);
        scene.add(light.target);
    }

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(`/threejs-poc/assets/maps/untitled.gltf`, (gltf) => {

            gltf.scene.traverse((child) => {
                console.log(child.name, child.type, child.userData);
                // console.log(child.type);
                if (child.isMesh) {
                    if (child.name === 'Line001' || child.name === 'Shape001') {//if(child.userData.shopname) {
                        console.log(child.name);
                        // child.visible = true;
                        objectsToRemove.push(child);
                    } else {
                        // child.visible = false;
                    }
                }

            });

            gltf.scene.name = "ground";
            scene.add(gltf.scene);

            console.log(objectsToRemove);
            objectsToRemove.map(item => {
                item.geometry.dispose();
                item.material.dispose();
                scene.remove(item);
                console.log('object removed.',item);
            });

            renderMap();
        }, undefined, error => {
            console.error('Error while loading map file: ', error);
        });
    }

    // function resizeRendererToDisplaySize(renderer) {
    //     const canvas = renderer.domElement;
    //     const width = canvas.clientWidth;
    //     const height = canvas.clientHeight;
    //     const needResize = canvas.width !== width || canvas.height !== height;
    //     if (needResize) {
    //         renderer.setSize(width, height, false);
    //     }
    //     return needResize;
    // }

    // function render() {
    //     if (resizeRendererToDisplaySize(renderer)) {
    //         const canvas = renderer.domElement;
    //         camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //         camera.updateProjectionMatrix();
    //     }

    //     renderer.render(scene, camera);

    //     requestAnimationFrame(render);
    // }

    requestAnimationFrame(renderMap);


    renderer = new THREE.WebGLRenderer({
        antialias: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // renderer.toneMappingExposure = 1;
    // renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    renderer.domElement.addEventListener("click", onMeshClick, false);
    renderer.domElement.addEventListener("touchstart", onMeshClick, false);
};


const renderMap = () => {
    renderer.render(scene, camera);
}


$(document).ready(main);