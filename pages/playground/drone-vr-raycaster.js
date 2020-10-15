import React, { Component } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer';
import Canvas from '../../components/three/canvas';
import Cube from '../../components/three/model-cube.js'

import * as THREE from 'three';
import SceneSetup from '../../components/three/scene.js';
import DropSample from '../../components/navs/dropdown-drone';
import Drone from '../../components/three/model-drone.js';

// XR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js'
import { XRControllerModelFactory } from '../../node_modules/three/examples/jsm/webxr/XRControllerModelFactory.js'
import { BoxLineGeometry } from '../../node_modules/three/examples/jsm/geometries/BoxLineGeometry.js';


class Scene extends Component {
	constructor(props) {
		super(props);
		
		this.canvasId = "canvas";
		this.state = {speed: 1};
		
		// XR Controller
		this.controller 
		this.controllerGrip
		this.controllerModelFactory
		this.tempMatrix = new THREE.Matrix4()
		this.INTERSECTED
		this.cube
		this.counter = 0
		this.step = 1
		
		this.createGround = this.createGround.bind(this);
		this.animate = this.animate.bind(this);
		this.renderIt = this.renderIt.bind(this);
		this.buildController = this.buildController.bind(this);
	}
	
	// XR Controller
	buildController( data ) {
	
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

	createGround(color) {
		var geometry = new THREE.BoxGeometry( 10, .1, 10 );
		var color = new THREE.MeshLambertMaterial({color: color});
		var cube = new THREE.Mesh( geometry, color );
		
		this.scene.scene.add(cube)
	}
	
	componentDidMount() {
		
		this.scene = new SceneSetup(THREE, this.canvasId);
		this.scene.camera.position.z = .5;
		this.scene.lights(THREE);
		
		this.cube = new Cube(THREE, "red")
		this.scene.scene.add(this.cube)
		
		// XR
		this.raycaster = new THREE.Raycaster();
		
		this.drone = new Drone(THREE, this.scene, this.animate, {vr: true});
		
		this.drone.group.position.y = 1.5;
		
		// Position 1
		this.drone.group.position.x = 0;
		this.drone.group.position.z = -2.5;
		
		this.drone.group.rotation.z = .3;
		this.drone.group.rotation.y = .5;
		
		this.createGround("rgb(80%, 82%, 83%)")
		
	
		// XR Controller
		
		var tester = this.buildController;
	
		this.controller = this.scene.renderer.xr.getController( 0 );
		
		this.controller.addEventListener( 'connected', function ( event ) {

			this.add( 
			//this.buildController( event.data ) 
			tester( event.data ) 
			);
		} );
		this.controller.addEventListener( 'disconnected', function () {

			this.remove( this.children[ 0 ] );
		} );
		this.scene.scene.add( this.controller );
		
		this.controllerModelFactory = new XRControllerModelFactory();
	
		this.controllerGrip = this.scene.renderer.xr.getControllerGrip( 0 );
		this.controllerGrip.add( this.controllerModelFactory.createControllerModel( this.controllerGrip ) );
		this.scene.scene.add( this.controllerGrip );
		
		// VR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( this.scene.renderer ) );
		this.scene.renderer.xr.enabled = true;
  	}
  	
  	animate() {
  	
  		this.scene.renderer.setAnimationLoop( this.animate )
  		  		
  		//var speed = this.state.speed/60;
  		
  		var speed = 30/60;
  		
  		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;	
		
		this.cube.position.x = 2
		this.cube.position.z = -5
		this.cube.position.y = .9
  		
		this.drone.propFL.rotation.y += speed;
		this.drone.propFR.rotation.y += speed;
		this.drone.propBL.rotation.y += speed;
		this.drone.propBR.rotation.y += speed;
		
		// Counter
		if (this.counter < 1201) {
			
			this.counter+= 1
			
			// Position 12 to 3 o'clock
			if ((this.counter > 0) && (this.counter < 300)) {
				
				this.drone.group.position.x += 0.01;
				this.drone.group.position.z += 0.01;
			}
			
			
			// Position 3 to 6 o'clock
			if ((this.counter > 301) && (this.counter < 600)) {
				
				this.drone.group.position.x += -0.01;
				this.drone.group.position.z += 0.01;
			}
			
			
			// Position 6 to 9 o'clock
			if ((this.counter > 601) && (this.counter < 900)) {
			
				this.drone.group.position.x += -0.01;
				this.drone.group.position.z += -0.01;
			}
			
			// Position 9 to 12 o'clock
			if ((this.counter > 901) && (this.counter < 1200)) {
			
				this.drone.group.position.x += 0.01;
				this.drone.group.position.z += -0.01;
			}
		
		} else { this.counter = 0 }
		
		
		//console.log(this.counter)
		
		
		this.renderIt();
	}
	
	renderIt() {
	
		this.tempMatrix.identity().extractRotation( this.controller.matrixWorld );

		this.raycaster.ray.origin.setFromMatrixPosition( this.controller.matrixWorld );
		this.raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( this.tempMatrix );

		var intersects = this.raycaster.intersectObjects( this.scene.scene.children );

		if ( intersects.length > 0 ) {
		
			if ( this.INTERSECTED != intersects[ 0 ].object ) {

				if ( this.INTERSECTED ) this.INTERSECTED.material.emissive.setHex( this.INTERSECTED.currentHex );
				
				// this.drone.propFL.rotation.y += 30/60;
				
				this.setState({speed: 30});

				this.INTERSECTED = intersects[ 0 ].object;
				this.INTERSECTED.currentHex = this.INTERSECTED.material.emissive.getHex();
				//this.INTERSECTED.material.emissive.setHex( 0xff0000 );
				
				this.INTERSECTED.material.color.set( "blue" );

			}

		} else {

			if ( this.INTERSECTED ) this.INTERSECTED.material.color.set( "red" )
			
			//this.INTERSECTED.material.emissive.setHex( this.INTERSECTED.currentHex );
		
			// this.drone.propFL.rotation.y += 1/60;
			
			this.setState({speed: 1});
			
			this.INTERSECTED = undefined;
		}
		
		this.scene.renderer.render( this.scene.scene, this.scene.camera );
	}
	
	render () {
		var canvasId = this.canvasId;
		var speed = this.state.speed;
	
		return (
			<>
			<Layout page="Aerial Drone">
				<div id="vr-controls"></div>
				<Canvas id={canvasId}></Canvas> 
			</Layout>
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
			</>
		);
	}
}
export default Scene;
