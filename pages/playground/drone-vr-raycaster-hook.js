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
	const [color, setColor] = useState("red")
	//const [speed, setSpeed] = useState(.15)
	
	var speed = .03
	var propSpeed = .15
	
	var angle = 0
	
	// 90 var angle = 1.5708
	// 45 var angle = 0.785398
	// 180 var angle = 3.14159
	// 225 var angle = 3.92699
	// 270 var angle = 4.71239
	// 315 var angle = 5.49779
	// 360 var angle = 6.28319
	
	var moveDrone = false
	var rotateDrone = false
	
	var controllerModelFactory = new XRControllerModelFactory()
	
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
		drone.group.rotation.y = angle
		
		//drone.group.rotateY(THREE.Math.degToRad(50)) //.5
		
		
		// XR Controller 1
		var controller1 = scene3D.renderer.xr.getController( 0 )
		controller1.addEventListener( 'selectstart', onSelectStartMove )
		controller1.addEventListener( 'selectend', onSelectEndMove )
		scene3D.scene.add(controller1)
		
		var controllerGrip1 = scene3D.renderer.xr.getControllerGrip( 0 )
		controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) )
		scene3D.scene.add( controllerGrip1 )
		
		
		// XR Controller 2
		var controller2 = scene3D.renderer.xr.getController( 1 )
		controller2.addEventListener( 'selectstart', onSelectStartRotate )
		controller2.addEventListener( 'selectend', onSelectEndRotate )
		scene3D.scene.add(controller2)
		
		var controllerGrip2 = scene3D.renderer.xr.getControllerGrip( 1 )
		controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) )
		scene3D.scene.add( controllerGrip2 )
		
		// XR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene3D.renderer ) )
		scene3D.renderer.xr.enabled = true
  	});
  	
  	// XR Controller
  	function buildController( data ) {
  	
  	}
  	
  	function onSelectStartMove() {

		cube.material.color.set( "blue" )
		
		propSpeed = .50
		moveDrone = true
	}
	

	function onSelectEndMove() {
	
		cube.material.color.set( "red" );
		
		propSpeed = .15
		moveDrone = false
	}
	
	function onSelectStartRotate() {

		rotateDrone = true
	}
	

	function onSelectEndRotate() {
	
		rotateDrone = false
	}
  	
  	function createGround(color) {
		var geometry = new THREE.BoxGeometry( 10, .1, 10 )
		var color = new THREE.MeshLambertMaterial({color: color})
		var cube = new THREE.Mesh( geometry, color )
		
		//scene3D.scene.add(cube)
	}
  	
  	function animate() {
		
		/*
		cube.rotation.x += 0.01
		cube.rotation.y += 0.01	
		
		cube.position.x = 2
		cube.position.z = -5
		cube.position.y = .9
		*/
		
		// Animate props
		drone.propFL.rotation.y += propSpeed;
		drone.propFR.rotation.y += propSpeed;
		drone.propBL.rotation.y += propSpeed;
		drone.propBR.rotation.y += propSpeed;
		
		if (moveDrone == true) {
			
			//drone.group.position.x += 0.01
			//drone.group.position.z += 0.01
			
			drone.group.position.x += speed * Math.sin(angle)
			drone.group.position.z += speed * Math.cos(angle)
			
			
			//numberX += speed * Math.sin(angle)
			//numberY -= speed * Math.sin(angle)
		}
		
		if (rotateDrone == true) {
			
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