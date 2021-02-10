import Head from 'next/head'
import Layout from '../../components/layout';
import CardProject from '../../components/cards/card-project';
import Link from "next/link"

export default function Home() {

	return (
  
  	<React.Fragment>
  	
  	<Layout page="Playground">
  	
		<h1>Playground</h1>
	
		<div className="row">
			<div className="col-md-6">
				<CardProject heading="Aerial Drone" link="#" src="./img/thumbnails/drone.png">
					<p className="card-text">
					The Aerial Drone demo is an interactive 3D model that shows the integration of a WebGL and an interface library (React).
					</p>
				
					<ul className="list">
						<li>
							<Link href="/playground/aerial-drone">
								<a>Aerial Drone</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/aerial-drone-vr">
								<a>Aerial Drone (VR)</a>
							</Link>
						</li>
					</ul>
				
				</CardProject>
			</div>
			<div className="col-md-6">
			
				<CardProject heading="Icarus" link="#" src="./img/thumbnails/icarus.png">
					
					<p className="card-text">The Space ship demo is an interactive 3D model that shows the integration of a WebGL and an interface library (React).</p>
					
					<ul className="list">
						<li>
							<Link href="/playground/icarus">
								<a>Icarus</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/icarus-vr">
								<a>Icarus (VR)</a>
							</Link>
						</li>
						{/* 
						<li>
							<Link href="/playground/icarus-blastoff">
								<a>Icarus Blastoff</a>
							</Link>
						</li>
						*/}
					</ul>

				</CardProject>
				
			</div>
		</div>
		
		<div className="row">
			<div className="col-md-6">
				<CardProject heading="3D Primitives" link="#" src="./img/thumbnails/cube.png">
					<p className="card-text">The Cube demo uses Three.js, a cross-browser JavaScript library and Application Programming Interface (API) used to create and display animated 3D computer graphics in a web browser. </p>
				
					<ul className="list">
						<li>
							<Link href="/playground/cube">
								<a>3D Cube</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/cube-gtlf">
								<a>3D Cube (GTLF)</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/cube-vr">
								<a>3D Cube (VR)</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/primitives">
								<a>3D Primitives</a>
							</Link>
						</li>
						{/* 
						<li>
							<Link href="/playground/cube-raycaster">
								<a>3D Cube (Raycaster)</a>
							</Link>
						</li>
						<li>
							<Link href="/playground/cube-vr-raycaster">
								<a>3D Cube (VR - Raycaster)</a>
							</Link>
						</li>
						*/}
					</ul>
				
				</CardProject>
			</div>
			<div className="col-md-6">
				{/* 
				<CardProject heading="Aerial Drone Base Station" link="#" src="./img/thumbnails/aerial-drone-base-station.png">
					<p className="card-text">
					The Aerial Drone Base Station demo used is <a href="https://www.adobe.com/products/aero.html">Adobe Aero</a>, an augmented reality authoring and publishing tool by Adobe Inc.
					</p>
				</CardProject>
				*/}
				
			</div>
		</div>
		
  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
