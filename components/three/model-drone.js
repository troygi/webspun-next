import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader';

function Drone(THREE, scene, animate, options) {
	this.scene = scene;
	this.drone
	this.propFL
	this.propFR
	this.propBL
	this.propBR
	this.loader = new OBJLoader()
	this.group = new THREE.Group()
	this.orange = new THREE.MeshLambertMaterial({color: "rgb(95%, 51%, 09%)"})
	this.grey = new THREE.MeshLambertMaterial({color: "rgb(40%, 42%, 43%)"})
	
	this.loader.load("/models/drone/aerial-drone.obj", handle_load.bind(this))
	function handle_load(obj) {
		
		this.drone = obj
		this.group.add( this.drone )
		
		// Colors
		this.drone.children[0].material = this.grey // Legs
		this.drone.children[1].material = this.grey // wings
		this.drone.children[2].material = this.orange // Body
		
		this.scene.scene.add(this.group)
	}
	
	this.loader.load("/models/drone/aerial-drone-prop.obj", loadProp.bind(this));
	function loadProp(obj) {
		
		this.propFL = obj;
		this.propFR = this.propFL.clone()
		this.propBL = this.propFL.clone()
		this.propBR = this.propFL.clone()
		
		this.group.add( this.propFL )
		this.group.add( this.propFR )
		this.group.add( this.propBL )
		this.group.add( this.propBR )
		
		setProp(this.propFL, this.grey, {x: .165, y: 0, z: .132 })
		setProp(this.propFR, this.grey, {x: -.165, y: 0, z: .132 })
		setProp(this.propBL, this.grey, {x: .165, y: 0, z: -.132 })
		setProp(this.propBR, this.grey, {x: -.165, y: 0, z: -.132 })
		
		this.scene.scene.add( this.group )
		
		if (options.vr == true) {
			this.scene.renderer.setAnimationLoop( animate ); // VR
		} else {
			animate()
		}
		
		function setProp(prop, color, pos) {
			
			prop.position.x = pos.x
			prop.position.y = pos.y
			prop.position.z = pos.z
			
			prop.children[0].material = color
		}
	}
		
}
export default Drone