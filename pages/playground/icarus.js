import React, { Component } from 'react';
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer';
import Canvas from '../../components/three/canvas';

import * as THREE from 'three';
import SceneSetup from '../../components/three/scene.js';
import DropSample from '../../components/navs/dropdown-drone';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import Drone from '../../components/three/model-icarus.js';

class Scene extends Component {
	constructor(props) {
		super(props);
		
		this.canvasId = "canvas";
		
		this.animate = this.animate.bind(this);
		this.settings = this.settings.bind(this);
	}
	
	componentDidMount() {
		
		this.scene = new SceneSetup(THREE, this.canvasId);
		
		this.scene.camera.position.z = 20;
		this.scene.lights(THREE);
		
		this.icarus = new Drone(THREE, this.scene, this.settings, this.animate, {vr: false});
		this.controls = new OrbitControls( this.scene.camera, this.scene.canvas );
  	}
  	
  	settings() {
  	
  		this.scene.scene.add( this.icarus.group )
		
		this.icarus.group.position.x = 12	
		this.icarus.ship.scale.set( .8, .8, .8 )
	}
  	
  	animate() {
  		
  		requestAnimationFrame( this.animate );
		this.scene.renderer.render( this.scene.scene, this.scene.camera );
	}
	
	render () {
		var canvasId = this.canvasId;
	
		return (
			<>
			<Layout page="Icarus">
				<Canvas id={canvasId}></Canvas> 
			</Layout>
			</>
		);
	}
}
export default Scene;
