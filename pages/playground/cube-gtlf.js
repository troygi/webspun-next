import Head from 'next/head'
import Layout from '../../components/layout';
var THREE = require('three');
import Model from '../../components/three/model-cube-gtlf.js';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="3D Cube">
  	
	<div className="card-portfolio-logo">

		<h1>3D Cube (gtlf)</h1>
	</div>
	
	<div style={{maxWidth: "500px", height: "auto", margin: "0 auto"}}>
	<Model color="red" canvasId="canvas" modelRotate="false" />
	</div>

  	</Layout>
  	
  	</React.Fragment>
		
	)
}
