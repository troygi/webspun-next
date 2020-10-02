import React, { useState,  useEffect} from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';

var THREE = require('three');
// import * as THREE from 'three';
import Canvas from '../../components/three/canvas';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import SceneSetup from '../../components/three/scene.js';
import DropSample from '../../components/controls/dropdown-sample';


function createCube(color) {
	
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var color = new THREE.MeshLambertMaterial({color: color});
	var cube = new THREE.Mesh( geometry, color );
	
	return cube;
}

export default function Home() {

	const canvasId = "canvas"
	var scene3D, box, controls;
	const [color, setColor] = useState("red");
	
	useEffect(() => {
		scene3D = new SceneSetup(THREE, canvasId);
		controls = new OrbitControls( scene3D.camera, scene3D.canvas );
		
		scene3D.camera.position.z = 3;
		scene3D.lights(THREE);
		box = createCube(color);
		
		scene3D.scene.add(box);
		animate();
  	});
  	
  	function animate() {
		
		requestAnimationFrame(animate);
		
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;				
			
		//controls.update();
		scene3D.renderer.render( scene3D.scene, scene3D.camera );
	}
	
	function handleColorChange(e) {
	
		setColor(e.target.value)
	}
	
	return (
  	
  	<React.Fragment>
  	<Layout page="3D Cube">
  	
		<div className="card-portfolio-logo">
			<h1>3D Cube</h1>
		</div>
	
		<div style={{maxWidth: "500px", height: "auto", margin: "0 auto"}}>
		<Canvas id={canvasId}>
			<DropSample menuTitle="Cube Color">
				<div className="form-group">
					<label htmlFor="exampleFormControlSelect2">Select Color</label>
					<select value={color} onChange={handleColorChange} className="form-control" id="exampleFormControlSelect2">
						<option value="red">red</option>
						<option value="green">green</option>
						<option value="blue">blue</option>
						<option value="yellow">yellow</option>
						<option value="orange">orange</option>
					</select>
				</div>
			</DropSample>
		</Canvas>
		</div>

  	</Layout>
  	
  	</React.Fragment>
		
	)
}
