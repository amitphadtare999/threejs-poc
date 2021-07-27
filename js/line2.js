const newPoints = [
    {
        "x": "-22.4987247865028",
        "y": "1",
        "z": "-25.0336269093113"
    },
    {
        "x": "-17.7461602606592",
        "y": "1",
        "z": "-25.0025712966227"
    },
    {
        "x": "-17.7461602606592",
        "y": "1",
        "z": "-25.0025712966227"
    },
    {
        "x": "-17.6693027220572",
        "y": "1",
        "z": "-22.5417836291157"
    },
    {
        "x": "-14.0691050850685",
        "y": "1",
        "z": "-22.6150330146741"
    },
    {
        "x": "-17.6693027220572",
        "y": "1",
        "z": "-22.5417836291157"
    },
    {
        "x": "-11.7246541175217",
        "y": "1",
        "z": "-22.5670298427908"
    },
    {
        "x": "-14.0691050850685",
        "y": "1",
        "z": "-22.6150330146741"
    },
    {
        "x": "-8.32050881016397",
        "y": "1",
        "z": "-22.6456894175996"
    },
    {
        "x": "-11.7246541175217",
        "y": "1",
        "z": "-22.5670298427908"
    },
    {
        "x": "-7.9165294116831",
        "y": "1",
        "z": "-21.4965035982374"
    },
    {
        "x": "-8.32050881016397",
        "y": "1",
        "z": "-22.6456894175996"
    },
    {
        "x": "-7.9165294116831",
        "y": "1",
        "z": "-21.4965035982374"
    },
    {
        "x": "-5.74274183945829",
        "y": "1",
        "z": "-21.4640053835318"
    },
    {
        "x": "-5.74274183945829",
        "y": "1",
        "z": "-21.4640053835318"
    },
    {
        "x": "0.0269363788916178",
        "y": "1",
        "z": "-21.3756060459435"
    },
    {
        "x": "-1.25709803817438",
        "y": "1",
        "z": "-16.1398680685599"
    },
    {
        "x": "0.0269363788916178",
        "y": "1",
        "z": "-21.3756060459435"
    },
    {
        "x": "-1.74565399155344",
        "y": "1",
        "z": "-10.8835549005296"
    },
    {
        "x": "-1.25709803817438",
        "y": "1",
        "z": "-16.1398680685599"
    },
    {
        "x": "-1.38114945461659",
        "y": "1",
        "z": "-5.66562935601656"
    },
    {
        "x": "-1.74565399155344",
        "y": "1",
        "z": "-10.8835549005296"
    },
    {
        "x": "-0.417278618183183",
        "y": "1",
        "z": "-1.44267558646406"
    },
    {
        "x": "-1.38114945461659",
        "y": "1",
        "z": "-5.66562935601656"
    },
    {
        "x": "1.65091042520515",
        "y": "1",
        "z": "3.32960108007992"
    },
    {
        "x": "-0.417278618183183",
        "y": "1",
        "z": "-1.44267558646406"
    },
    {
        "x": "2.22104731093005",
        "y": "1",
        "z": "4.44999767553341"
    },
    {
        "x": "1.65091042520515",
        "y": "1",
        "z": "3.32960108007992"
    },
    {
        "x": "4.69263777675247",
        "y": "1",
        "z": "5.29567627765747"
    },
    {
        "x": "2.22104731093005",
        "y": "1",
        "z": "4.44999767553341"
    },
    {
        "x": "5.12842527676578",
        "y": "1",
        "z": "11.1607591139756"
    },
    {
        "x": "4.69263777675247",
        "y": "1",
        "z": "5.29567627765747"
    },
    {
        "x": "6.93889151577331",
        "y": "1",
        "z": "15.7791046276371"
    },
    {
        "x": "5.12842527676578",
        "y": "1",
        "z": "11.1607591139756"
    },
    {
        "x": "6.93889151577331",
        "y": "1",
        "z": "15.7791046276371"
    },
    {
        "x": "11.0086986142378",
        "y": "1",
        "z": "15.9218313577295"
    },
    {
        "x": "11.0086986142378",
        "y": "1",
        "z": "15.9218313577295"
    },
    {
        "x": "18.2440984176228",
        "y": "1",
        "z": "16.0674911101564"
    },
    {
        "x": "18.2440984176228",
        "y": "1",
        "z": "16.0674911101564"
    },
    {
        "x": "18.635506397525",
        "y": "1",
        "z": "10.8584431103773"
    },
    {
        "x": "18.635506397525",
        "y": "1",
        "z": "10.8584431103773"
    },
    {
        "x": "18.7224321309636",
        "y": "1",
        "z": "9.00723463389405"
    },
    {
        "x": "21.1680866053512",
        "y": "1",
        "z": "8.70804381933321"
    },
    {
        "x": "18.7224321309636",
        "y": "1",
        "z": "9.00723463389405"
    },
    {
        "x": "22.4936884317678",
        "y": "1",
        "z": "8.58213823061826"
    },
    {
        "x": "21.1680866053512",
        "y": "1",
        "z": "8.70804381933321"
    },
    {
        "x": "23.2835068777875",
        "y": "1",
        "z": "7.00937112868998"
    },
    {
        "x": "22.4936884317678",
        "y": "1",
        "z": "8.58213823061826"
    }
];

var lineVertShader = `
attribute float lineDistance;
varying float vLineDistance;

void main() {
  vLineDistance = lineDistance;
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}
`;

var lineFragShader = `
uniform vec3 diffuse;
uniform float opacity;
uniform float time; // added time uniform

uniform float dashSize;
uniform float gapSize;
uniform float dotSize;
varying float vLineDistance;

void main() {
      float totalSize = dashSize + gapSize;
      float modulo = mod( vLineDistance + time, totalSize ); // time added to vLineDistance
  float dotDistance = dashSize + (gapSize * .5) - (dotSize * .5);
  
  if ( modulo > dashSize && mod(modulo, dotDistance) > dotSize ) {
    discard;
  }

  gl_FragColor = vec4( diffuse, opacity );
}
`;


var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
var camera = new THREE.PerspectiveCamera(100, 1, 0.1, 100);
camera.position.set(0, 60, 0);
var renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.update();

var points = [];
let point1 = new THREE.Vector3(31.377557733077, 1,-16.0689985891751);
let point2 = new THREE.Vector3(29.7081772109323, 1,-16.6899528876776);
let point3 = new THREE.Vector3(30.8674150639734, 1,14.3006839400957);
// points = [point1, point2, point3];
console.log(points);
for (let i = 0; i < newPoints.length; i++) {
//     let x = THREE.Math.randInt(-10, 10);
//     let y = THREE.Math.randInt(1, 2);
//     let z = THREE.Math.randInt(-2, 2);
//     console.log(x,y,z);
      let {x,y,z} = newPoints[i];
  points.push(new THREE.Vector3(x,y,z));
}
console.log(points);
var lineDistances = [];
var d = 0;
for (let i = 0; i < points.length; i++) {
  if (i > 0) {
    d += points[i].distanceTo(points[i - 1]);
    console.log(`D between ${points[i]} and ${points[i-1]} is: `,d);
  }
  lineDistances[i] = d;
}

var lineGeom = new THREE.BufferGeometry().setFromPoints(points);
lineGeom.setAttribute('lineDistance', new THREE.BufferAttribute(new Float32Array(lineDistances), 1));

var lineMat = new THREE.ShaderMaterial({
    uniforms: {
          diffuse: {value: new THREE.Color("red")},
      dashSize: {value: 1},
      gapSize: {value: 0.5},
      dotSize: {value: 0.1},
      opacity: {value: 1.0},
      time: {value: 0} // added uniform
    },
    vertexShader: lineVertShader,
    fragmentShader: lineFragShader,
    transparent: true,
    linewidth: 4
  });

  var line = new THREE.Line(lineGeom, lineMat);
//   var newLine = new MeshLine();
//   newLine.setPoints(points);
scene.add(line);

var clock = new THREE.Clock();
var time = 0;

render();

function render() {
  requestAnimationFrame(render);
  time += clock.getDelta();
  lineMat.uniforms.time.value = time; // using of the time uniform
  renderer.render(scene, camera);
}