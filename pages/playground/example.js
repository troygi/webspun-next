import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer-example'

var THREE = require('three');
// import * as THREE from 'three'
import Canvas from '../../components/three/canvas'

import SceneSetup from '../../components/three/scene.js'

import Cube from '../../components/three/model-cube.js'

// VR
import { ARButton } from '../../node_modules/three/examples/jsm/webxr/ARButton.js'

export default function Scene() {

	const canvasId = "canvas"
	
	var container;
	var camera, scene, renderer;
	var controller;

	

	function init() {

		container = document.createElement( 'div' );
		document.body.appendChild( container );

		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );

		var light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );
		light.position.set( 0.5, 1, 0.25 );
		scene.add( light );

		//

		renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.xr.enabled = true;
		container.appendChild( renderer.domElement );

		//

		document.body.appendChild( ARButton.createButton( renderer ) );

		//

		var geometry = new THREE.CylinderBufferGeometry( 0, 0.05, 0.2, 32 ).rotateX( Math.PI / 2 );

		function onSelect() {

			var material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } );
			var mesh = new THREE.Mesh( geometry, material );
			mesh.position.set( 0, 0, - 0.3 ).applyMatrix4( controller.matrixWorld );
			mesh.quaternion.setFromRotationMatrix( controller.matrixWorld );
			scene.add( mesh );

		}

		controller = renderer.xr.getController( 0 );
		controller.addEventListener( 'select', onSelect );
		scene.add( controller );

		//

		window.addEventListener( 'resize', onWindowResize, false );

	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}

	//

	function animate() {

		renderer.setAnimationLoop( render );

	}

	function render() {

		renderer.render( scene, camera );

	}
	
	useEffect(() => {
		init();
	animate();
		
  	});
  	
  	
	
	
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
