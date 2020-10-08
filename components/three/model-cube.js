function Cube(THREE, color) {
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var color = new THREE.MeshLambertMaterial({color: color});
	var cube = new THREE.Mesh( geometry, color );
	return cube;
}
export default Cube