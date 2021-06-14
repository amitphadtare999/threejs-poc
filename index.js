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

    {
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        let points = [];
        // points.push(new THREE.Vector3(- 10, 0));
        // points.push(new THREE.Vector3(0, 10));
        // points.push(new THREE.Vector3(10, 0, 0));

        points.push(new THREE.Vector3(27.760939606216, 1, -17.8513487237274));
        points.push(new THREE.Vector3(27.8839976782384, 1, -18.581588333667));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(28.872750043413, 1, -17.5930762987168));
        points.push(new THREE.Vector3(28.9176277520048, 1, -18.3069483734717));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(30.0903999097177, 1, -17.9317011784003));
        points.push(new THREE.Vector3(29.7081772109323, 1, -16.6899528876776));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(31.377557733077, 1, -16.0689985891751));
        points.push(new THREE.Vector3(29.7081772109323, 1, -16.6899528876776));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(30.8674150639734, 1, -14.3006839400957));
        points.push(new THREE.Vector3(29.2246045144958, 1, -14.8102854277682));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(29.7081772109323, 1, -16.6899528876776));
        points.push(new THREE.Vector3(29.2246045144958, 1, -14.8102854277682));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(29.5651462305948, 1, -10.8471008764138));
        points.push(new THREE.Vector3(28.3117528138102, 1, -11.1587205501898));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(29.2246045144958, 1, -14.8102854277682));
        points.push(new THREE.Vector3(28.3117528138102, 1, -11.1587205501898));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(22.0343393414377, 1, -13.7670978946992));
        points.push(new THREE.Vector3(23.1358081025727, 1, -13.5988053655172));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(21.8712700518527, 1, -15.2216396610556));
        points.push(new THREE.Vector3(23.0021959540453, 1, -15.11721011078182));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(21.2535734138101, 1, -16.9237617299053));
        points.push(new THREE.Vector3(23.1172747068526, 1, -17.3371662288152));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(23.7123931453388, 1, -12.4659807238344));
        points.push(new THREE.Vector3(23.1358081025727, 1, -13.5988053655172));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(23.1358081025727, 1, -13.5988053655172));
        points.push(new THREE.Vector3(23.0021959540453, 1, -15.1172101107818));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(23.0021959540453, 1, -15.1172101107818));
        points.push(new THREE.Vector3(23.1172747068526, 1, -17.3371662288152));
        drawLine(points); points = [];

        points.push(new THREE.Vector3(23.8403496809144, 1, -24.3213635012927));
        points.push(new THREE.Vector3(22.4073644014973, 1, -24.7559533629544));
        drawLine(points); points = [];



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