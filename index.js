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

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    console.log('intersects are: ', intersects);



    // intersects.map(item => {
    //     console.log(item.object);
    // });

    // if (intersects.length > 0) {
    //     console.log("Intersection:", intersects[0]);
    
    //     const face = intersects[0].face;
    
    //     const linePosition = line.geometry.attributes.position;
    //     const meshPosition = intersects[0].object.geometry.attributes.position;
    
    //     linePosition.copyAt( 0, meshPosition, face.a );
    //     linePosition.copyAt( 1, meshPosition, face.b );
    //     linePosition.copyAt( 2, meshPosition, face.c );
    //     linePosition.copyAt( 3, meshPosition, face.a );
    
    //     mesh.updateMatrix();
    
    //     line.geometry.applyMatrix4( mesh.matrix );
    
    //     line.visible = true;
    
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
    controls.maxPolarAngle = Math.PI / 2;
    // controls.minPolarAngle = Math.PI / 3;
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
                // console.log(child.name, child.type, child.userData);
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

            renderMap();
        }, undefined, error => {
            console.error('Error while loading map file: ', error);
        });
    }

    //Drawing path on map
    {
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 10 });
        paths.map(item => {
            let points = [];
            let point1Cords = item.point1.split(',');
            let point2Cords = item.point2.split(',');

            points.push(new THREE.Vector3(point1Cords[0], point1Cords[1], point1Cords[2]));
            points.push(new THREE.Vector3(point2Cords[0], point2Cords[1], point2Cords[2]));

            let geometry = new THREE.BufferGeometry().setFromPoints(points);
            // let geometry = new THREE.LineGeometry();
            let line = new THREE.Line(geometry, material);
            scene.add(line);
            // console.log(point1Cords)
        })
    }

  
    addShopNames();

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

    renderMap();
};


const renderMap = () => {
    requestAnimationFrame(renderMap);
    renderer.render(scene, camera);
}

const addShopNames = () => {
    const fontLoader = new THREE.FontLoader();
    fontLoader.load('/threejs-poc/assets/fonts/Poppins_Regular.json', font => {
        const color = 0x006699;
        const matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: false,
            opacity: 0.8,
            side: THREE.DoubleSide
        });

        labels.map(shop => {
            let message = shop.name;
            const shapes = font.generateShapes(message, 1);

            const geometry = new THREE.ShapeGeometry(shapes);
            const text = new THREE.Mesh(geometry, matLite);
            text.rotation.x = -1.43;//Math.PI/2;
            // text.rotateZ(Math.PI/2);
            // text.rotation.y = 0;
            // text.rotation.z = 0;
            let { x, y, z } = shop.position;
            text.position.set(x, y, z);

            scene.add(text);

        });
        renderMap();
    });
};

const drawLine = (points) => {
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let line = new THREE.Line(geometry, material);
    scene.add(line);
};

$(document).ready(main);