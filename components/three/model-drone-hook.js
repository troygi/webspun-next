import React, { useState,  useEffect} from 'react';
import * as THREE from 'three';
import Canvas from './canvas-new';
import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import SceneSetup from './scene.js';

import DropSample from '../../components/navs/dropdown-drone';

export default function Scene(props) {
	
	var scene3D;
	var drone;
	var propFL, propFR, propBL, propBR;
	var controls;
	const loader = new OBJLoader();
	const group = new THREE.Group();
	const orange = new THREE.MeshLambertMaterial({color: "rgb(95%, 51%, 09%)"});
	const grey = new THREE.MeshLambertMaterial({color: "rgb(40%, 42%, 43%)"});
	//const [speed, setUsr] = useState(60);
	
	const [speed, setSpeed] = useState(1);
	
	useEffect(() => {
		
		scene3D = new SceneSetup(THREE, props.canvasId);
		scene3D.camera.position.z = .5;
		scene3D.lights(THREE);
		
		controls = new OrbitControls( scene3D.camera, scene3D.canvas );
	
		
		loader.load("/models/drone/aerial-drone.obj", handle_load.bind(this));
		function handle_load(obj) {
			
			drone = obj;
			drone.position.x = 0;
			
			// Colors
			drone.children[0].material = grey; // Legs
			drone.children[1].material = grey; // wings
			drone.children[2].material = orange; // Body
			
			scene3D.scene.add(drone);
			animate();
		}
		
		loader.load("/models/drone/aerial-drone-prop.obj", loadProp.bind(this));
		function loadProp(obj) {
			
			propFL = obj;
			propFR = propFL.clone();
			propBL = propFL.clone();
			propBR = propFL.clone();
			
			group.add( propFL );
			group.add( propFR );
			group.add( propBL );
			group.add( propBR );
			
			setProp(propFL, {x: .165, y: 0, z: .132 });
			setProp(propFR, {x: -.165, y: 0, z: .132 });
			setProp(propBL, {x: .165, y: 0, z: -.132 });
			setProp(propBR, {x: -.165, y: 0, z: -.132 });
			
			function setProp(prop, pos) {
				
				prop.position.x = pos.x;
				prop.position.y = pos.y;
				prop.position.z = pos.z;
				
				prop.children[0].material = grey; 
			}
						
			scene3D.scene.add( group );
			animateProps();	
		}	
  	});
  	
  	function animateProps() {
			
			requestAnimationFrame( animateProps );
			
			var speed2 = speed/60;
			
			propFL.rotation.y += speed2;
			propFR.rotation.y += speed2;
			propBL.rotation.y += speed2;
			propBR.rotation.y += speed2;
	}
  	
  	function animate() {
		
		requestAnimationFrame(animate);
		
		//controls.update();
		scene3D.renderer.render( scene3D.scene, scene3D.camera );
	}
	
	const handleChange = (e) => {
		setSpeed(e.target.value);
	}
	
	return (
		<Canvas id={props.canvasId}> 
			<DropSample menuTitle="Prop Speed">
				<div className="form-group">
					<div className="slidecontainer">
					<input type="range" min="1" max="60" value={speed} className="slider" id="myRange" onChange={e => handleChange(e)}  />
					<label htmlFor="myRange">Prop Speed: <span id="demo">{speed}</span></label>
					</div>
				</div>
			</DropSample> 
		</Canvas> 
	);
}