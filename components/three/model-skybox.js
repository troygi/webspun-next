import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader';

function Drone(THREE, scene, settings, animate, options) {
	this.group = new THREE.Group()
	this.loader = new OBJLoader()
	this.orange = new THREE.MeshLambertMaterial({color: "rgb(95%, 51%, 09%)"})
	this.grey = new THREE.MeshLambertMaterial({color: "rgb(40%, 42%, 43%)"})
	
	this.loader.load("/models/spaceships/icarus.obj", handle_load.bind(this))
	function handle_load(obj) {
		
		this.ship = obj
		this.group.add( this.ship )
		
		// Colors
		//this.ship.children[0].material = this.grey // Fuselage
		this.ship.children[1].material = this.orange // Cap
		this.ship.children[2].material = this.grey // Windows
		
		settings()
		
		if (options.vr == true) {
			scene.renderer.setAnimationLoop( animate ); // VR
		} else {
			animate()
		}
	}
}
export default Drone