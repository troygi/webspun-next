import React, { useState,  useEffect} from 'react'

import Layout from '../../components/layout-webgl-viewer';
import Canvas from '../../components/three/canvas';
import Cube from '../../components/three/model-cube.js'

import * as THREE from 'three';
import SceneSetup from '../../components/three/scene.js';
import Drone from '../../components/three/model-icarus.js';

// XR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'
import { XRControllerModelFactory } from '../../node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js'
import { BoxLineGeometry } from '../../node_modules/three/examples/jsm/geometries/BoxLineGeometry.js';


export default function Scene() {

	const canvasId = "canvas"
	var scene3D, cube, drone, moveDrone
	var angle = 0
	var speed = .03
	
	var moveDroneForward = false
	var moveDroneBackward = false
	var rotateDroneLeft = false
	var rotateDroneRight = false
	
	var controllerModelFactory = new XRControllerModelFactory()
	
	useEffect(() => {
			
		scene3D = new SceneSetup(THREE, canvasId)
		scene3D.lights(THREE)
		
		// Add ground
		createGround(0xBA945C)	
		scene3D.renderer.setClearColor (0x63B5E6, 1)
		
		// Add drone
		drone = new Drone(THREE, scene3D, settings, animate, {vr: true})
		
		// Skybox
		var envMap = new THREE.CubeTextureLoader()
			.setPath('/img/skybox/space-red/')
			
			.load([
				"bkg3_left2.png", 
				"bkg3_right1.png", 
				"bkg3_top3.png", 
				"bkg3_bottom4.png", 
				"bkg3_back6.png", 
				"bkg3_front5.png" 
			]);
			scene3D.scene.background = envMap
	
	
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
  	
  	
  	function onSelectStartMoveForward() {  moveDroneForward = true }
  	function onSelectStartMoveBackward() {  moveDroneBackward = true }
	function onSelectEndMove() { moveDroneForward = false; moveDroneBackward = false }
	
	function onSqueezeStartRotateLeft() { rotateDroneLeft = true }
	function onSqueezeStartRotateRight() { rotateDroneRight = true }
	function onSqueezeEndRotate() { rotateDroneLeft = false; rotateDroneRight = false  }
  	
  	function createGround(color) {
		var geometry = new THREE.BoxGeometry( 50, .1, 50 )
		var color = new THREE.MeshLambertMaterial({color: color})
		var cube = new THREE.Mesh( geometry, color )
		
		scene3D.scene.add(cube)
	}
	
	function settings() {
		
		scene3D.scene.add( drone.group )
		
		drone.group.position.x = 0
		drone.group.position.y = -0		
		drone.group.position.z = -8		
		drone.group.scale.set( 1, 1, 1 )
		
		drone.ship.rotation.set( 0, 0.8, 0 )
	}
  	
  	function animate() {
		
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