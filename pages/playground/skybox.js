import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
import SceneSetup from '../../components/three/scene.js'
import Canvas from '../../components/three/canvas'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import Cube from '../../components/three/model-cube.js'

// VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'

export default function Home() {

	const canvasId = "canvas"
	var scene, cube, controls
	const [color, setColor] = useState("red")
	
	useEffect(() => {
		
		cube = new Cube(THREE, color)

		scene = new SceneSetup(THREE, canvasId)
		scene.lights(THREE)
		scene.scene.add(cube)
		
		
		// Skybox
		var envMap = new THREE.CubeTextureLoader()
			.setPath('/img/skybox/Yokohama2/')
			
			.load([
				"posx.jpg", 
				"negx.jpg", 
				"posy.jpg", 
				"negy.jpg", 
				"posz.jpg", 
				"negz.jpg" 
			]);
			
			scene.scene.background = envMap;
		
	
		controls = new OrbitControls( scene.camera, scene.canvas )
		render()
		
		// XR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene.renderer ) );
		
		scene.renderer.xr.enabled = true
  	});
  	
  	function render() {
		
		scene.renderer.setAnimationLoop( render )
		
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;	
		
		cube.position.z = -4
		cube.position.y = .5
		//scene.camera.position.z = 3					
			
		scene.renderer.render( scene.scene, scene.camera )
	}
	
	function handleColorChange(e) {
	
		setColor(e.target.value)
	}
	
	return (
  	
  	<>
  	<Layout page="3D Cube">
  		<div id="vr-controls"></div>
  		<Canvas id={canvasId}></Canvas>

  		<style jsx>{`
			#vr-controls {
				z-index: 2;
				position: absolute;
				top: 20px;
				left: 20px;
				right: 20px;
				height: 60px;
			}
			
		`}</style>
  	</Layout>
  	</>
		
	)
}
