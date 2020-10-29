import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
import Canvas from '../../components/three/canvas'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import SceneSetup from '../../components/three/scene.js'
import DropSample from '../../components/controls/dropdown-sample'
import Cube from '../../components/three/model-cube.js'


export default function Home() {

	const canvasId = "canvas"
	var scene, cube, controls
	const [color, setColor] = useState("red")
	
	// Raycaster
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2(1, 1);
	var intersects = [];
	
	/* Raycaster
	function mouseMove( event ) {

		event.preventDefault();

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	}
	*/
	
	
	useEffect(() => {
		
		cube = new Cube(THREE, color);

		scene = new SceneSetup(THREE, canvasId)
		scene.camera.position.z = 3
		scene.lights(THREE)
		scene.scene.add(cube)
		controls = new OrbitControls( scene.camera, scene.canvas )
		animate()
		
		// Raycaster
		//document.addEventListener( 'mousemove', mouseMove, false );
  	})
  	
  	function animate() {
		
		requestAnimationFrame(animate)
		
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01	
		
		scene.renderer.render( scene.scene, scene.camera )		
	}
  	
	function handleColorChange(e) {
	
		setColor(e.target.value)
	}
	
	return (
  	<>
  	<Layout page="3D Cube">
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
						<option value="crate">Crate</option>
					</select>
				</div>
			</DropSample>
		</Canvas>
  	</Layout>
  	
  	<style jsx>{`
	#viewer-iframe {
		width: 400px;
		height: 400px;
		border: 1px dotted red;
	}
	`}</style>

  	</>
	)
}
