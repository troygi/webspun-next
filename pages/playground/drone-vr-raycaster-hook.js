import React, { useState,  useEffect} from 'react'

import Layout from '../../components/layout-webgl-viewer';
import Canvas from '../../components/three/canvas';
import Cube from '../../components/three/model-cube.js'

import * as THREE from 'three';
import SceneSetup from '../../components/three/scene.js';
import Drone from '../../components/three/model-drone.js';

// XR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'
import { XRControllerModelFactory } from '../../node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js'
import { BoxLineGeometry } from '../../node_modules/three/examples/jsm/geometries/BoxLineGeometry.js';


export default function Scene() {

	const canvasId = "canvas"
	var scene3D, cube, drone, controller1
	const [color, setColor] = useState("red")
	const [speed, setSpeed] = useState(.25);
	
	useEffect(() => {
		
		scene3D = new SceneSetup(THREE, canvasId)
		//scene.camera.position.z = 3
		scene3D.lights(THREE)
		//scene3D.scene.add(cube)
		
		// Add cube
		cube = new Cube(THREE, color)
		scene3D.scene.add(cube)
		
		// Add ground
		createGround("rgb(80%, 82%, 83%)")
		
		// Add drone
		drone = new Drone(THREE, scene3D, animate, {vr: true});
		
		drone.group.position.x = 0
		drone.group.position.y = 1.5
		drone.group.position.z = -2.5
		drone.group.rotation.z = .3
		drone.group.rotation.y = .5
		
		
		// XR Controller
		controller1 = scene3D.renderer.xr.getController( 0 );
		controller1.addEventListener( 'connected', function ( event ) {
			/*
			this.add( 
				buildController( event.data ) 
			);
			*/
		} );
		controller1.addEventListener( 'disconnected', function () {

			this.remove( 
				this.children[ 0 ] 
			);
		} );
		
		controller1.addEventListener( 'selectstart', onSelectStart );
		controller1.addEventListener( 'selectend', onSelectEnd );
		
		scene3D.scene.add(controller1);
		
		// XR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene3D.renderer ) );
		scene3D.renderer.xr.enabled = true
  	});
  	
  	// XR Controller
  	function buildController( data ) {
  	
  	
  	}
  	
  	function onSelectStart() {

		//this.userData.isSelecting = true;
		
		cube.material.color.set( "blue" );

	}

	function onSelectEnd() {
	
		cube.material.color.set( "red" );
		//this.userData.isSelecting = false;

	}
  	
  	function createGround(color) {
		var geometry = new THREE.BoxGeometry( 10, .1, 10 )
		var color = new THREE.MeshLambertMaterial({color: color})
		var cube = new THREE.Mesh( geometry, color )
		
		scene3D.scene.add(cube)
	}
  	
  	function animate() {
		
		//setSpeed(.50)
		
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01	
		
		cube.position.x = 2
		cube.position.z = -5
		cube.position.y = .9
		
		// Animate props
		drone.propFL.rotation.y += speed;
		drone.propFR.rotation.y += speed;
		drone.propBL.rotation.y += speed;
		drone.propBR.rotation.y += speed;
		
		render()
	}
	
	
  	function render() {
				
		scene3D.renderer.render( scene3D.scene, scene3D.camera )
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