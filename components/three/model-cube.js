function Cube(THREE, color) {
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	
	if (color == "crate") {
		var texture = new THREE.TextureLoader().load( '/img/textures/crate.gif' );
		var color = new THREE.MeshBasicMaterial( { map: texture } );
	} else {
		var color = new THREE.MeshLambertMaterial({color: color});
	}
	
	var cube = new THREE.Mesh( geometry, color );
	return cube;
}
export default Cube