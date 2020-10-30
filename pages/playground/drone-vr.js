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
	var scene3D, cube, drone, moveDrone
	
	var speed = .03
	var propSpeed = .15
	var angle = 0
	
	var moveDroneForward = false
	var moveDroneBackward = false
	var rotateDroneLeft = false
	var rotateDroneRight = false
	
	var controllerModelFactory = new XRControllerModelFactory()
	
	useEffect(() => {
	
		var listener = new THREE.AudioListener();
		
		scene3D = new SceneSetup(THREE, canvasId)
		scene3D.lights(THREE)
		
		// Audio
		scene3D.camera.add( listener )
		var sound = new THREE.Audio( listener )
		
		var audioLoader = new THREE.AudioLoader();
			audioLoader.load( '/sounds/drone-flying.mp3', function( buffer ) {
			sound.setBuffer( buffer );
			sound.setLoop( true );
			sound.setVolume( 0.5 );
			sound.play();
		});
		
		// Add ground
		createGround("rgb(23%, 80%, 22%)")	
		scene3D.renderer.setClearColor (0x63B5E6, 1);

		// Add drone
		drone = new Drone(THREE, scene3D, animate, {vr: true});
		
		drone.group.position.x = 0
		drone.group.position.y = 1.5
		drone.group.position.z = -2.5
		drone.group.rotation.y = angle

		// XR Controller - Right
		const controllerRight = scene3D.renderer.xr.getController( 0 )
		controllerRight.addEventListener( 'selectstart', onSelectStartMoveForward )
		controllerRight.addEventListener( 'selectend', onSelectEndMove )
		
		controllerRight.addEventListener( 'squeezestart', onSqueezeStartRotateRight )
		controllerRight.addEventListener( 'squeezeend', onSqueezeEndRotate )
		
		scene3D.scene.add(controllerRight)
		
		const controllerGripRight = scene3D.renderer.xr.getControllerGrip( 0 )
		controllerGripRight.add( controllerModelFactory.createControllerModel( controllerGripRight ) )
		scene3D.scene.add( controllerGripRight )
		
		// XR Controller - Left
		const controllerLeft = scene3D.renderer.xr.getController( 1 )
		controllerLeft.addEventListener( 'selectstart', onSelectStartMoveBackward )
		controllerLeft.addEventListener( 'selectend', onSelectEndMove )
		
		controllerLeft.addEventListener( 'squeezestart', onSqueezeStartRotateLeft )
		controllerLeft.addEventListener( 'squeezeend', onSqueezeEndRotate )
		
		scene3D.scene.add(controllerLeft)
		
		const controllerGripLeft = scene3D.renderer.xr.getControllerGrip( 1 )
		controllerGripLeft.add( controllerModelFactory.createControllerModel( controllerGripLeft ) )
		scene3D.scene.add( controllerGripLeft )
		
		// XR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene3D.renderer ) )
		scene3D.renderer.xr.enabled = true
  	});
  	
  	
  	function onSelectStartMoveForward() { propSpeed = .50; moveDroneForward = true }
  	function onSelectStartMoveBackward() { propSpeed = .50; moveDroneBackward = true }
	function onSelectEndMove() { propSpeed = .15; moveDroneForward = false; moveDroneBackward = false }
	
	function onSqueezeStartRotateLeft() { rotateDroneLeft = true }
	function onSqueezeStartRotateRight() { rotateDroneRight = true }
	function onSqueezeEndRotate() { rotateDroneLeft = false; rotateDroneRight = false  }
  	
  	function createGround(color) {
		var geometry = new THREE.BoxGeometry( 10, .1, 10 )
		var color = new THREE.MeshLambertMaterial({color: color})
		var cube = new THREE.Mesh( geometry, color )
		
		scene3D.scene.add(cube)
	}
  	
  	function animate() {
		
		// Animate props
		drone.propFL.rotation.y += propSpeed;
		drone.propFR.rotation.y += propSpeed;
		drone.propBL.rotation.y += propSpeed;
		drone.propBR.rotation.y += propSpeed;
		
		if (moveDroneForward == true) {
			
			drone.group.position.x += speed * Math.sin(angle)
			drone.group.position.z += speed * Math.cos(angle)
		}
		
		if (moveDroneBackward == true) {
			
			drone.group.position.x -= speed * Math.sin(angle)
			drone.group.position.z -= speed * Math.cos(angle)
		}
		
		if (rotateDroneLeft == true) {
			
			angle = drone.group.rotation.y -= 0.01
		}
		
		if (rotateDroneRight == true) {
			
			angle = drone.group.rotation.y += 0.01
		}
		
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