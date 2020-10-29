import React, { Component } from 'react';
import Layout from '../components/layout';

import Model from '../components/three/model-skybox.js';

class Page extends Component {
	constructor(props) {
		super(props);
		
		this.state = {color: "red", isAuto: false};
		this.navPrim = "projects";
		this.navSec = "demos";
		
		this.handleColorChange = this.handleColorChange.bind(this);
		this.handleAutoRotate = this.handleAutoRotate.bind(this);
	}
	
	handleColorChange(e) {
	
		this.setState({color: e.target.value});
	}
	
	handleAutoRotate(e) {
		
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		//this.setState({isAuto: value});
	}
	
	render () {
	
		var color = this.state.color;
		var modelRotate = this.state.isAuto;
		
		//var color = this.props.color;
		
		
		
		
		
	
		return (
		
		<React.Fragment>
		<Layout>    
		
			
			<div className="col-md-6">
				<h1>Skybox</h1>
				
				<p>
				The Cube demo uses <a href="https://threejs.org">Three.js</a>, a cross-browser JavaScript library and Application Programming Interface 
				(API) used to create and display animated 3D computer graphics in a web browser. 
				Three.js uses WebGL. 
				</p>
				
				<Model color={color} canvasId="canvas" webVR="true" />
				
				
			</div>{/* col-md-3 */}
			
		</Layout>
		</React.Fragment>
		);	
	}
}
export default Page;

