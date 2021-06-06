const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
let points = [];

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

renderMap();


const drawLine = (points) => {
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    let geometry = new THREE.BufferGeometry().setFromPoints(points);
    let line = new THREE.Line(geometry, material);
    scene.add(line);
};