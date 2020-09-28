import React, { useState} from 'react';
import Head from 'next/head'
import Layout from '../../components/layout';
import Model from '../../components/three/model-drone.js';
import DropSample from '../../components/navs/dropdown-drone';

export default function Home() {

	const [speed, setSpeed] = useState(1);
	
	const handleChange = (e) => {
		setSpeed(e.target.value);
	}

	return (
  	
  	<React.Fragment>
  	<Layout page="3D Cube">
  	
	<div className="card-portfolio-logo">
		<h1>Aerial Drone</h1>
	</div>
	
	<div style={{maxWidth: "500px", height: "auto", margin: "0 auto"}}>
		<Model canvasId="canvas" speed={speed}/>
	</div>

  	</Layout>
  	
  	</React.Fragment>
		
	)
}
