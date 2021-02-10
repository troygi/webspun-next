import React, { useState,  useEffect} from 'react'
import Head from 'next/head'
import Layout from '../../components/layout-webgl-viewer'

var THREE = require('three');
import Canvas from '../../components/three/canvas'
import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls'
import SceneSetup from '../../components/three/scene.js'
import DropSample from '../../components/controls/dropdown-sample'
import {Cube, Cone, Tetrahedron} from '../../components/three/model-primitives.js'


export default function Home() {

	const canvasId = "canvas"
	var scene3D, primitive, controls, edgeLine
	const [color, setColor] = useState("red")
	const [edge, setEdge] = useState(false)
	const [shape, setShape] = useState("cube")
	
	useEffect(() => {
		
		if (shape == "cube") {
			primitive = new Cube( THREE, color );
		}
		
		if (shape == "cone") {
			primitive = new Cone( THREE, color );
		}
		
		if (shape == "tetrahedron") {
			primitive = new Tetrahedron(THREE, color);
		}
		
		scene3D = new SceneSetup(THREE, canvasId)
		scene3D.camera.position.z = 3
		scene3D.lights(THREE)
		
		// Add primitives
		scene3D.scene.add(primitive.shape)
		
		// Add edge
		/*
		if (edge == true) {
			edgeLine = new Edge( primitive.geometry )
			scene3D.scene.add( edgeLine.line )
		}
		*/
		
		// Add controls
		controls = new OrbitControls( scene3D.camera, scene3D.canvas )
		animate()
  	})
  	
  	function animate() {
		
		requestAnimationFrame(animate)
		
		//primitive.shape.rotation.x += 0.01
		//primitive.shape.rotation.y += 0.01	
		
		if (edge == true) {
			//edgeLine.line.rotation.x += 0.01
			//edgeLine.line.rotation.y += 0.01
		}	
		
		scene3D.renderer.render( scene3D.scene, scene3D.camera )		
	}
	
	function Edge(geometry) {
		const edges = new THREE.EdgesGeometry( geometry );
		this.line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
	}
  	
	function handleColorChange(e) {
	
		setColor(e.target.value)
		
		if (e.target.value == "green") {
			//scene3D.scene.remove( cube )
			//scene3D.scene.remove()
			//cube.geometry.dispose()
			//cube.material.dispose()
			//BufferGeometry.dispose( )
		}
	}
	
	function handleShapeChange(e) {
	
		//setShape("tetrahedron")
		
		if (e.target.value == "cube") {
		
			setShape("cube")
		}
		
		if (e.target.value == "cone") {
		
			setShape("cone")
		}
		
		if (e.target.value == "tetrahedron") {
		
			setShape("tetrahedron")
		}
	}
	
	function handleEdge(e) {
	
		if (e.target.checked) {
			//setEdge(true)
			//edgeLine = new Edge( primitive.geometry )
			//scene3D.scene.add( edgeLine.line )
		
		} else {
			//setEdge(false)
		}
		
		/*
		if (edge == true) {
			edgeLine = new Edge( primitive.geometry )
			scene3D.scene.add( edgeLine.line )
		}
		*/
	}
	
	return (
  	<>
  	<Layout page="3D Cube">
		<Canvas id={canvasId}>
			<DropSample menuTitle="Cube Color">
				<div className="form-group">
					<label htmlFor="colorControl">Select Color</label>
					<select value={color} onChange={handleColorChange} className="form-control" id="colorControl">
						<option value="red">red</option>
						<option value="green">green</option>
						<option value="blue">blue</option>
						<option value="yellow">yellow</option>
						<option value="orange">orange</option>
						<option value="crate">Crate</option>
					</select>
				</div>
				
				
				<div className="form-group">
					<label htmlFor="shapeControl">Select Color</label>
					<select value={shape} onChange={handleShapeChange} className="form-control" id="shapeControl">
						<option value="cube">Cube</option>
						<option value="cone">Cone</option>
						<option value="tetrahedron">Tetrahedron</option>
					</select>
				</div>


 				<div className="form-check">
					<input type="checkbox" checked={edge} className="form-check-input" id="vehicle1" name="vehicle1" value="Bike" onChange={handleEdge} />
					<label htmlFor="vehicle1"> Add edge</label>
				</div>	
			</DropSample>
		</Canvas>
  	</Layout>
  	
  	<style jsx>{`
	#viewer-iframe {
		width: 400px;
		height: 400px;
		border: 1px dotted red;
	}
	`}</style>

  	</>
	)
}
