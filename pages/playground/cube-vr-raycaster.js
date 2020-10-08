import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
// import * as THREE from 'three'
import Canvas from '../../components/three/canvas'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import SceneSetup from '../../components/three/scene.js'
import RayCastSetup from '../../components/three/raycast.js'
import Cube from '../../components/three/model-cube.js'

// VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'

export default function Home() {

	const canvasId = "canvas"
	var scene, box, controls, raycast, INTERSECTED
	const [color, setColor] = useState("red")
	
	// Raycaster
	raycast = new RayCastSetup(THREE)
	
	function mouseMove( event ) {

		event.preventDefault()
		raycast.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
		raycast.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
	}
	
	useEffect(() => {
		
		box = new Cube(THREE, color)

		scene = new SceneSetup(THREE, canvasId)
		//scene.camera.position.z = 3
		scene.lights(THREE)
		scene.scene.add(box)
		controls = new OrbitControls( scene.camera, scene.canvas )
		animate()
		
		// VR
		//document.body.appendChild( VRButton.createButton( scene.renderer ) )
		document.getElementById("vr-controls").appendChild( VRButton.createButton( scene.renderer ) );
		
		scene.renderer.xr.enabled = true
		
		// Raycaster
		document.addEventListener( 'mousemove', mouseMove, false );
  	});
  	
  	
  	function animate() {
		
		scene.renderer.setAnimationLoop( animate )
		
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;	
		
		box.position.z = -4
		box.position.y = .5
		
		render()
	}
  	
  	function render() {
		
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
