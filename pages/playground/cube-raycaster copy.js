import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
// import * as THREE from 'three'
import Canvas from '../../components/three/canvas'
import SceneSetup from '../../components/three/scene.js'
import RayCastSetup from '../../components/three/raycast.js'
import Cube from '../../components/three/model-cube.js'


export default function Home() {

	const canvasId = "canvas"
	var scene, cube, cube2, cubes, controls, INTERSECTED
	const [color, setColor] = useState("blue")
	
	// Raycaster
	var raycaster = new THREE.Raycaster()
	var mouse = new THREE.Vector2(1, 1)
	var intersects = []
	
	function mouseMove( event ) {

		event.preventDefault()

		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
	}
	
	
	useEffect(() => {
		
		cube = new Cube(THREE, "red");
		cube2 = new Cube(THREE, "orange");
		
		cube.position.z = -5
		cube2.position.z = -5
		
		cube.position.x = -.5
		cube2.position.x = .5
		
		cube.scale.set(.5,.5,.5);
		cube2.scale.set(.5,.5,.5);
		
		scene = new SceneSetup(THREE, canvasId)
		scene.lights(THREE)
		scene.scene.add(cube, cube2)
		
		//controls = new OrbitControls( scene.camera, scene.canvas )
		animate()
		
		// Raycaster
		document.addEventListener( 'mousemove', mouseMove, false );
  	})
  	
  	function animate() {
		
		requestAnimationFrame(animate)
		
		cubes = [cube, cube2]
		
		for ( var i = 0; i < cubes.length; i++ ) {
		
			cubes[i].rotation.x += 0.01
			cubes[i].rotation.y += 0.01
		}
			
		
		render()	
	}
  	
  	function render() {
  	
  		raycaster.setFromCamera( mouse, scene.camera );
  		var intersects = raycaster.intersectObjects( scene.scene.children );
  		
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
		
  		/*
  		if ( intersects.length > 0 ) {
			
			intersects[ 0 ].object.material.color.set( "green" );
			
		} else {
		
			for ( var i = 0; i < cubes.length; i++ ) {
			
				cubes[ i ].material.color.set( "blue" );
			}
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
  		<Canvas id={canvasId}></Canvas>
  	</Layout>
  	</>	
	)
}
