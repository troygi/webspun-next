
function Cube(THREE, color) {
	
	this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
	
	if (color == "crate") {
		
		this.texture = new THREE.TextureLoader().load( '/img/textures/crate.gif' );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
	} else {
		
		this.material = new THREE.MeshLambertMaterial({color: color});
	}
	
	this.shape = new THREE.Mesh( this.geometry, this.material );
}

function Cone(THREE, color) {
	//this.geometry = new THREE.ConeGeometry( 4, 9, 15 );
	
	this.geometry = new THREE.ConeGeometry( .75, 1.5, 12 );
	
	this.material = new THREE.MeshLambertMaterial( {color: color} );
	this.shape = new THREE.Mesh( this.geometry, this.material );
	//this.shape.scale.set( .2, .2, .2)
}

function Cylinder(THREE, color) {
	this.geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
	this.material = new THREE.MeshLambertMaterial( {color: color} );
	this.shape = new THREE.Mesh( this.geometry, this.material );
	this.shape.scale.set( .1, .1, .1)
}
			
function Tetrahedron(THREE, color) {
	
	const radius = .8
	const detail = 2
	
	this.geometry = new THREE.TetrahedronBufferGeometry(radius, detail);
	this.material = new THREE.MeshLambertMaterial( {color: color} );
	
	this.shape = new THREE.Mesh( this.geometry, this.material );
	//this.shape.scale.set( .1, .1, .1)

}

function Triangle(THREE, color) {
	
	const geometry = new THREE.Geometry();
	
	geometry.vertices.push(
		new THREE.Vector3( -10,  10, 0 ),
		new THREE.Vector3( -10, -10, 0 ),
		new THREE.Vector3(  10, -10, 0 )
	);
	
	geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
	geometry.computeBoundingSphere();
	
	const material = new THREE.MeshLambertMaterial( {color: 0x7E44BA} );
	const shape = new THREE.Mesh( geometry, material );
	
	shape.scale.set( .1, .1, .1)
}

export  {Cube, Cone, Cylinder, Tetrahedron, Triangle}