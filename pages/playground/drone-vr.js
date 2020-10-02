import React, { Component } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Canvas from '../../components/three/canvas';

import * as THREE from 'three';
import SceneSetup from '../../components/three/scene.js';
import DropSample from '../../components/navs/dropdown-drone';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import NewDrone from '../../components/three/model-drone.js';

// VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';

class Scene extends Component {
	constructor(props) {
		super(props);
		
		this.canvasId = "canvas";
		this.state = {speed: 1};
		
		this.animate = this.animate.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	componentDidMount() {
		
		this.scene = new SceneSetup(THREE, this.canvasId);
		this.drone = new NewDrone(THREE, this.scene, this.animate, {vr: true});
		
		this.drone.group.position.z = -.3;
		
		this.scene.camera.position.z = .5;
		this.scene.lights(THREE);
		this.controls = new OrbitControls( this.scene.camera, this.scene.canvas );
		
		// VR
		document.getElementById(this.canvasId+"-box").appendChild( VRButton.createButton( this.scene.renderer ) );
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
				<div className="card-portfolio-logo">
					<h1>Aerial Drone VR</h1>
				</div>

				<div style={{maxWidth: "500px", height: "auto", margin: "0 auto"}}>
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
				</div>
			</Layout>
			</>
		);
	}
}
export default Scene;
