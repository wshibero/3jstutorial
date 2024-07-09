const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const material = new THREE.LineBasicMaterial( { color: "green" } );

const points = [];
points.push( new THREE.Vector3( -10, 0, 1 ) );
points.push( new THREE.Vector3( -10, 10, 0 ) );
points.push( new THREE.Vector3( 10, -10, 0 ) );
points.push( new THREE.Vector3( 10, 20, 0 ) )
points.push( new THREE.Vector3( -10, 0, 1))

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line(geometry, material)

scene.add(line)
renderer.render(scene, camera)
