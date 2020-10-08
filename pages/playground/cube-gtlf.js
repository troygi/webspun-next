import React, { useState,  useEffect} from 'react';
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer';
var THREE = require('three');
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import SceneSetup from '../../components/three/scene.js';
import Canvas from '../../components/three/canvas';

import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';

export default function Home() {

	const canvasId = "canvas"
	var scene, cube, controls;
	var loader = new GLTFLoader();
	var color = new THREE.MeshLambertMaterial({color: "orange"});
			
	
	useEffect(() => {
	
		scene = new SceneSetup(THREE, canvasId);
		scene.camera.position.z = 3;
		scene.lights(THREE);
		controls = new OrbitControls( scene.camera, scene.canvas );
		
		loader.load("/models/cube.glb", handle_load.bind(this));
		function handle_load(obj) {
	
			cube = obj.scene;
			cube.position.x = 0;
			cube.children[1].material = color;
			
			scene.scene.add(cube);
			
			render();
		}
  	});
  	
  	function render() {
		
		requestAnimationFrame(render);
		
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;				
			
		scene.renderer.render( scene.scene, scene.camera );
	}
	
	return (
  	<>
  	<Layout page="3D Cube">
		<Canvas id={canvasId}></Canvas> 
  	</Layout>
  	</>
	)
}


