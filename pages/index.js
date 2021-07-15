import Head from 'next/head'
import Layout from '../components/layout-home';
import CardProject from '../components/cards/card-project';
import Link from "next/link"

export default function Home() {
	return (
  	<>
	<Layout page="Home">
	
		<hr className="hr-home mt-4 mb-5" />
		
		<h1 className="mb-3">Featured Work</h1>
		
		<div className="row">
			<div className="col-md-6">
				<CardProject heading="3D Aerial Drone" link="/playground/aerial-drone" src="./img/thumbnails/drone.png">
					<p className="card-text">
					An interactive 3D drone that shows the integration of a WebGL and an interface library (React).
					</p>
				</CardProject>
			</div>
			<div className="col-md-6">
			
				<CardProject heading=" 3D Icarus - VR" link="/playground/icarus-vr" src="./img/thumbnails/icarus.png">
					<p className="card-text">An interactive 3D spaceship in VR that shows the integration of a WebGL and an interface library (React).</p>
				</CardProject>
				
			</div>
		</div>
		
	</Layout>
	<style>{`
	.hr-home {
		border-top:2px solid #69c9ca;
		width:40%;
		height:5px;
	}
	.text {
		width:60%;
		text-align: center;
		font-size:1.1rem;
	}
    `}</style>
  	</>
	)
}