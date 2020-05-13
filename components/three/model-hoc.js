import React from 'react';
import * as THREE from 'three';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from '../../node_modules/three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls';
import Canvas from './canvas';

// Web VR
import { VRButton } from '../../node_modules/three/examples/jsm/webxr/VRButton.js';

const modelHOC = (WrappedComponent, model) => {
	class HOC extends React.Component {
		constructor(props) {
			super(props);
			
			this.camera = new THREE.PerspectiveCamera( 75, 500/500, 0.1, 1000 );		
			this.scene = new THREE.Scene();
			this.scale = model.scale || 1;
			
			this.model;
			
			this.modelClass = model;
			
			this.geometry = model.geometry;
			this.controls;
			
			this.cameraPos = model.camera || {x:0, y:0, z:3};
			
			this.modelType = model.modelType;
			this.modelUrl = model.modelUrl;
					
			this.lights = this.lights.bind(this);
			this.setColor = this.setColor.bind(this);
			this.animate = this.animate.bind(this);
			this.animateVR = this.animateVR.bind(this);
			this.onWindowResize = this.onWindowResize.bind(this);
			this.handle_load = this.handle_load.bind(this);
		}
		
		lights() {
		
			var light = new THREE.AmbientLight(0Xffffff, 0.5);
			this.scene.add(light);

			var light1 = new THREE.PointLight(0Xffffff, 0.5);
			light1.position.x = 20;
			light1.position.y = 20;
			light1.position.z = 10;
	
			this.scene.add(light1);

			var light2 = new THREE.PointLight(0Xffffff, 0.3);
			light2.position.x = -20;
			light2.position.y = 20;
			light2.position.z = 20;
	
			this.scene.add(light2);
		}
		
		setColor = function(model, material) {
	
			model.traverse( function ( node ) {

				if ( node.isMesh ) node.material = material;
			} );
		}
		
		
		onWindowResize() {
		
			var width = this.canvasBox.offsetWidth;
			this.renderer.setSize( width, width );
		}
		
		animate() {
		
			requestAnimationFrame(this.animate);
			
			// Uncomment for MODEL CONTROLS
			this.material.color.set( this.props.color );
			
			
			if (this.props.modelRotate == true) {
				this.model.rotation.x += 0.01;
				this.model.rotation.y += 0.01;
			}
			
			//this.modelClass.modelAnimation(this.model, this.scene);
			
			this.controls.update();
			this.renderer.render( this.scene, this.camera );
		}
		
		animateVR() {
			
			this.model.rotation.x += 0.01;
			this.model.rotation.y += 0.01;
			
			this.model.position.x = -1;
			this.model.position.y = 1.6;
			this.model.position.z = -2;
			
			this.renderer.render( this.scene, this.camera );
		}
		
		handle_load(obj) {
				
			
			if (this.modelType == "gtlf") {this.model = obj.scene;}
			else {this.model = obj}
			
			this.material = new THREE.MeshLambertMaterial({color: this.props.color});
			this.setColor(this.model, this.material);
			this.model.rotation.y = 5;
			
			this.model.scale.set(this.scale,this.scale,this.scale);
			
			this.scene.add( this.model );
			
			//this.modelClass.setColor(this.model, this.scene);
			
			this.animate(this.model);
		}
		
		componentDidMount() {
			
			this.canvas = document.getElementById(this.props.canvasId);
			this.canvasBox = document.getElementById(this.props.canvasId + "-box");
			
			this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
			this.renderer.setSize( 400, 400 );
			this.renderer.setClearColor (0xffffff, 1); // Canvas BG
			
			// Web VR
			if (this.props.webVR) {
				this.camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 5);	
				document.body.appendChild( VRButton.createButton( this.renderer ) );
				this.renderer.vr.enabled = true;
			}
			
			
			window.addEventListener('resize', this.onWindowResize, false);
			this.onWindowResize();
			
			this.controls = new OrbitControls( this.camera, this.canvas );
			this.camera.position.set( 0, 5, 2 );
			
			switch (this.modelType) {
			
				case "gtlf":
					
					var loader = new GLTFLoader();
					loader.load(this.modelUrl, this.handle_load);
				break;
			
				case "obj":
				
					var loader = new OBJLoader();
					loader.load(this.modelUrl, this.handle_load);
				break;
			
				default:
					
					this.material = new THREE.MeshLambertMaterial({color: this.props.color});
					this.model = new THREE.Mesh( this.geometry, this.material );
					this.model.scale.set(this.scale,this.scale,this.scale);
					this.scene.add( this.model );
					
					
					if (this.props.webVR) {
					
						this.renderer.setAnimationLoop( this.animateVR );
						/*
						this.renderer.setAnimationLoop( function () {

							this.model.rotation.x += 0.01;
							this.model.rotation.y += 0.01;
							
							this.model.position.x = -1;
							this.model.position.y = 1.6;
							this.model.position.z = -2;
							
							this.renderer.render( this.scene, this.camera );

						}.bind(this) );
						*/
					
					}
					
					else {
						this.animate();
					}
					
				;
			}
			
			this.camera.position.set( this.cameraPos.x, this.cameraPos.y, this.cameraPos.z);
			this.lights();
			
		}
  
		render() {
			
			const canvasId = this.props.canvasId;
			const color = this.props.color;

			return (
			
				<div>
				
				<Canvas id={canvasId} />
			
				<WrappedComponent
				  {...this.props}
				  model={"cube"}
				/>
				</div>
			);
		}
	}
	return HOC;
};

export default modelHOC;