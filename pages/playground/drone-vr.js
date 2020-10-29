import React, { Component } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'
import Canvas from '../../components/three/canvas'

import * as THREE from 'three'
import SceneSetup from '../../components/three/scene.js'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import DropSample from '../../components/navs/dropdown-drone'
import Drone from '../../components/three/model-drone.js'

// VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';

class Scene extends Component {
	constructor(props) {
		super(props);
		
		this.canvasId = "canvas";
		this.state = {speed: 1};
		
		this.createGround = this.createGround.bind(this);
		this.animate = this.animate.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		
		this.drone = new Drone(THREE, this.scene, this.animate, {vr: true});
		this.drone.group.position.y = 1.5;
		this.drone.group.position.z = -.7;
		
		this.drone.group.rotation.z = .5;
		this.drone.group.rotation.y = .5;
		
		
		this.createGround("rgb(80%, 82%, 83%)")
		
		
		this.controls = new OrbitControls( this.scene.camera, this.scene.canvas );
		
		// VR
		document.getElementById("vr-controls").appendChild( VRButton.createButton( this.scene.renderer ) );
		
		this.scene.renderer.xr.enabled = true;
  	}
  	
  	animate() {
  		  		
  		var speed = this.state.speed/60;
  		
		this.drone.propFL.rotation.y += speed;
		this.drone.propFR.rotation.y += speed;
		this.drone.propBL.rotation.y += speed;
		this.drone.propBR.rotation.y += speed;
		
		this.scene.renderer.render( this.scene.scene, this.scene.camera );
	}
	
	handleChange(e) {
		this.setState({speed: e.target.value});
	}
	
	render () {
		var canvasId = this.canvasId;
		var speed = this.state.speed;
	
		return (
			<>
			<Layout page="Aerial Drone">
				<div id="vr-controls"></div>
				<Canvas id={canvasId}>
					<DropSample menuTitle="Prop Speed">
						<div className="form-group">
							<div className="slidecontainer">
							<input type="range" min="1" max="60" value={speed} className="slider" id="myRange" onChange={this.handleChange} />
							<label htmlFor="myRange">Prop Speed: <span id="demo">{speed}</span></label>
							</div>
						</div>
					</DropSample>
				</Canvas> 
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
