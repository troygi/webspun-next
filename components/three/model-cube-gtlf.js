import React, { useState,  useEffect} from 'react';
import * as THREE from 'three';
import Canvas from './canvas';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import SceneSetup from './scene.js';

function createCube(color) {
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	
	var color = new THREE.MeshLambertMaterial({color: color});
	
	var cube = new THREE.Mesh( geometry, color );
	
	return cube;
}


export default function Scene(props) {
	
	var scene3D;
	var model;
	var controls;
	var loader = new GLTFLoader();

	useEffect(() => {
		scene3D = new SceneSetup(THREE, "canvas");
		controls = new OrbitControls( scene3D.camera, scene3D.canvas );
		
		scene3D.camera.position.z = 3;
		scene3D.lights(THREE);
		
		loader.load("/models/cube.glb", handle_load.bind(this));
		function handle_load(obj) {
	
			model = obj.scene;
			
			
			var color = new THREE.MeshLambertMaterial({color: "orange"});
			
			model.position.x = 0;
			model.children[1].material = color;
			
			scene3D.scene.add(model);
			
			animate();
		}
		
  	});
  	
  	function animate() {
		
		requestAnimationFrame(animate);
		
		model.rotation.x += 0.01;
		model.rotation.y += 0.01;				
			
		controls.update();
		scene3D.renderer.render( scene3D.scene, scene3D.camera );
	}

	return (
	<div>
		<Canvas id={props.canvasId} />
	</div>
	);
}








