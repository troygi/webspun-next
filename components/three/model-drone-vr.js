import React, { Component } from 'react';
import * as THREE from 'three';
import Canvas from './canvas';
import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import DropSample from '../../components/navs/dropdown-drone';
import SceneSetup from './scene.js';

// VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';

class Scene extends Component {
	
	constructor(props) {
		super(props);
		
		this.scene3D;
		this.drone;
		this.propFL;
		this.propFR;
		this.propBL;
		this.propBR;
		this.controls;
		this.loader = new OBJLoader();
		this.group = new THREE.Group();
		this.orange = new THREE.MeshLambertMaterial({color: "rgb(95%, 51%, 09%)"});
		this.grey = new THREE.MeshLambertMaterial({color: "rgb(40%, 42%, 43%)"});
		this.state = {speed: 1};
		
		this.animate = this.animate.bind(this);
		this.animateProps = this.animateProps.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount() {
		
		this.scene3D = new SceneSetup(THREE, this.props.canvasId);
		//this.scene3D.camera.position.z = .5;
		
		this.scene3D.camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 10 );
		this.scene3D.camera.position.set( 0, 0, 2 );
		
		
		this.scene3D.lights(THREE);
		
		this.controls = new OrbitControls( this.scene3D.camera, this.scene3D.canvas );
		
		// VR
		document.getElementById(this.props.canvasId+"-box").appendChild( VRButton.createButton( this.scene3D.renderer ) );
		this.scene3D.renderer.xr.enabled = true;
	
		
		this.loader.load("/models/drone/aerial-drone.obj", handle_load.bind(this));
		function handle_load(obj) {
			
			this.drone = obj;
			this.drone.position.x = 0;
			this.drone.position.z = -2;
			
			// Colors
			this.drone.children[0].material =this. grey; // Legs
			this.drone.children[1].material = this.grey; // wings
			this.drone.children[2].material = this.orange; // Body
			
			this.scene3D.scene.add(this.drone);
			
			// VR
			this.scene3D.renderer.setAnimationLoop( this.animate );
			// this.animate();
		}
		
		
		this.loader.load("/models/drone/aerial-drone-prop.obj", loadProp.bind(this));
		function loadProp(obj) {
			
			this.propFL = obj;
			this.propFR = this.propFL.clone();
			this.propBL = this.propFL.clone();
			this.propBR = this.propFL.clone();
			
			this.group.add( this.propFL );
			this.group.add( this.propFR );
			this.group.add( this.propBL );
			this.group.add( this.propBR );
			
			this.setProp(this.propFL, {x: .165, y: 0, z: .132 });
			this.setProp(this.propFR, {x: -.165, y: 0, z: .132 });
			this.setProp(this.propBL, {x: .165, y: 0, z: -.132 });
			this.setProp(this.propBR, {x: -.165, y: 0, z: -.132 });
			
			this.scene3D.scene.add( this.group );
			this.animateProps();	
		}	
		
  	}
  	
  	setProp(prop, pos) {
				
		prop.position.x = pos.x;
		prop.position.y = pos.y;
		prop.position.z = pos.z;
		
		prop.children[0].material = this.grey; 
	}
  	
  	animateProps() {
			
		requestAnimationFrame( this.animateProps );
		
		var speed = this.state.speed/60;

		this.propFL.rotation.y += speed;
		this.propFR.rotation.y += speed;
		this.propBL.rotation.y += speed;
		this.propBR.rotation.y += speed;
	
	}
	
  	animate() {
		
		requestAnimationFrame(this.animate);
		//controls.update();
		this.scene3D.renderer.render( this.scene3D.scene, this.scene3D.camera );
	}
	
	handleChange(e) {
		this.setState({speed: e.target.value});
	}
	
	render () {
	
		var speed = this.state.speed;
	
		return ( 
		<Canvas id={this.props.canvasId}> 
			<DropSample menuTitle="Prop Speed">
				<div className="form-group">
					<div className="slidecontainer">
					<input type="range" min="1" max="60" value={speed} className="slider" id="myRange" onChange={this.handleChange} />
					<label htmlFor="myRange">Prop Speed: <span id="demo">{speed}</span></label>
					</div>
				</div>
			</DropSample>
		</Canvas> 
		);
	}
}
export default Scene;