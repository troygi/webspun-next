import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
// import * as THREE from 'three'
import Canvas from '../../components/three/canvas'
import SceneSetup from '../../components/three/scene.js'
import RayCastSetup from '../../components/three/raycast.js'
import Cube from '../../components/three/model-cube.js'

// XR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'
import { XRControllerModelFactory } from '../../node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js'
import { BoxLineGeometry } from '../../node_modules/three/examples/jsm/geometries/BoxLineGeometry.js';


export default function Home() {

	const canvasId = "canvas"
	var scene, cube, controls, INTERSECTED, raycaster
	const [color, setColor] = useState("red")	
	

	// XR Controller
	var controller, controllerGrip, controllerModelFactory
	var tempMatrix = new THREE.Matrix4();
	
	
	function buildController( data ) {
	
		
		switch ( data.targetRayMode ) {

			case 'tracked-pointer':

				var geometry = new THREE.BufferGeometry();
				geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [ 0, 0, 0, 0, 0, - 1 ], 3 ) );
				geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( [ 0.5, 0.5, 0.5, 0, 0, 0 ], 3 ) );

				var material = new THREE.LineBasicMaterial( { vertexColors: true, blending: THREE.AdditiveBlending } );

				return new THREE.Line( geometry, material );

			case 'gaze':

				var geometry = new THREE.RingBufferGeometry( 0.02, 0.04, 32 ).translate( 0, 0, - 1 );
				var material = new THREE.MeshBasicMaterial( { opacity: 0.5, transparent: true } );
				return new THREE.Mesh( geometry, material );
		}

	}
	
	
	useEffect(() => {
	
		scene = new SceneSetup(THREE, canvasId)
		
		cube = new Cube(THREE, color)
		
		raycaster = new THREE.Raycaster();
		
		//scene.camera.position.z = 3
		scene.lights(THREE)
		scene.scene.add(cube)
		
		// XR Controller
		controller = scene.renderer.xr.getController( 0 );
		
			controller.addEventListener( 'connected', function ( event ) {

			this.add( buildController( event.data ) );
		} );
		controller.addEventListener( 'disconnected', function () {

			this.remove( this.children[ 0 ] );
		} );
		scene.scene.add( controller );
		
		controllerModelFactory = new XRControllerModelFactory();
		
		controllerGrip = scene.renderer.xr.getControllerGrip( 0 );
		controllerGrip.add( controllerModelFactory.createControllerModel( controllerGrip ) );
		scene.scene.add( controllerGrip );

		
		animate()
		
		// VR
		//document.body.appendChild( VRButton.createButton( scene.renderer ) )
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene.renderer ) );
		
		scene.renderer.xr.enabled = true
		
		// Raycaster
		//document.addEventListener( 'mousemove', mouseMove, false );
  	});
  	
  	
  	function animate() {
		
		scene.renderer.setAnimationLoop( animate )
		
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;	
		
		cube.position.z = -5
		cube.position.y = .9
		
		render()
	}
  	
  	function render() {
		
			tempMatrix.identity().extractRotation( controller.matrixWorld );

			raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
			raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

			var intersects = raycaster.intersectObjects( scene.scene.children );

			if ( intersects.length > 0 ) {
			
			console.log("test 2");

				if ( INTERSECTED != intersects[ 0 ].object ) {

					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

					INTERSECTED = intersects[ 0 ].object;
					INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
					INTERSECTED.material.emissive.setHex( 0xff0000 );

				}

			} else {

				if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

				INTERSECTED = undefined;

			}
	
		/*
		raycast.raycaster.setFromCamera( raycast.mouse, scene.camera );
  		var intersects = raycast.raycaster.intersectObjects( scene.scene.children );
  		
  		if ( intersects.length > 0 ) {

			if ( INTERSECTED != intersects[ 0 ].object ) {

				if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

				INTERSECTED = intersects[ 0 ].object;
				INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
				INTERSECTED.material.emissive.setHex( 0xff0000 );

			}

		} else {

			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

			INTERSECTED = null;
		}
		*/
		
		
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
