import React, { Component } from 'react';
import * as THREE from 'three';
import Canvas from './canvas';
import SceneSetup from './scene.js';


function CreateBox(props) {
	
	var color = props.color ? props.color : "green";
	var geo = props.geo ? props.geo : [1, 1, 1];
	
	this.geometry = new THREE.BoxGeometry(geo[0], geo[1], geo[2]);
	this.material = new THREE.MeshLambertMaterial({color: color});
	this.model = new THREE.Mesh( this.geometry, this.material );
}

// Web VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';

class Cube extends Component {
	constructor(props) {
		super(props);
		
		this.animate = this.animate.bind(this);
		this.animateVR = this.animateVR.bind(this);
	}
	
	animate = function () {
		
		requestAnimationFrame( this.animate );
		
		//this.cube.rotation.x += 0.01;
		//this.cube.rotation.y += 0.01;	
		
		this.s3D.renderer.render( this.s3D.scene, this.s3D.camera );
	}
	
	animateVR() {
			
		//this.cube.rotation.x += 0.01;
		//this.cube.rotation.y += 0.01;
		
		this.cube.position.x = 0;
		this.cube.position.y = 1.6;
		this.cube.position.z = -3;
		
		this.s3D.renderer.render( this.s3D.scene, this.s3D.camera );
	}
	
	componentDidMount() {
	
	
		// Setup
		this.s3D = new SceneSetup(THREE, "canvas");
		
		this.s3D.lights(THREE);
		
		
		var texture = new THREE.TextureLoader().load( './img/textures/crate.gif' );
		
		this.geometry = new THREE.BoxGeometry(1, 1, 1);
		//this.material = new THREE.MeshLambertMaterial({color: "orange"});
		
		this.material = new THREE.MeshBasicMaterial( { map: texture } );
		
		this.cube = new THREE.Mesh( this.geometry, this.material );
		
		/*
		var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
		var material = new THREE.MeshBasicMaterial( { map: texture } );
		mesh = new THREE.Mesh( geometry, material );
		scene3D.scene.add( mesh );
		*/
	
		this.s3D.scene.add( this.cube );
		this.s3D.camera.position.z = 5;
		
		
		var envMap = new THREE.CubeTextureLoader()
			.setPath('./skybox/Yokohama2/')
			
			.load([
				"posx.jpg", 
				"negx.jpg", 
				"posy.jpg", 
				"negy.jpg", 
				"posz.jpg", 
				"negz.jpg" 
			]);
			
			this.s3D.scene.background = envMap;
		
		
		// Web VR
		if (this.props.webVR == "true") {
		
			this.camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 5);	
			this.s3D.canvasBox.appendChild( VRButton.createButton( this.s3D.renderer ) );
			this.s3D.renderer.vr.enabled = true;
					
			this.s3D.renderer.setAnimationLoop( this.animateVR );
		}
		else {
			this.animate();
		}
			
	}
	
	render () {
		const canvasId = this.props.canvasId;
		return ( <Canvas id={canvasId} /> );	
	}
}
export default Cube;
