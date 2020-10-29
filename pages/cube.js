import Head from 'next/head'
import Layout from '../components/layout';
import Link from "next/link"

export default function Home() {

	return (
  
  	<React.Fragment>
  	
  	<Layout page="About">
  	
		<h1>3D Cube</h1>
	
		<p>
		3D Cube...
		</p>
		
		<ul className="list">
			<li>
				<Link href="/playground/cube">
					<a>3D Cube</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/cube-raycaster">
					<a>3D Cube (Raycaster)</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/cube-vr">
					<a>3D Cube (VR)</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/cube-vr-raycaster">
					<a>3D Cube (VR - Raycaster)</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/cube-gtlf">
					<a>3D Cube (GTLF)</a>
				</Link>
			</li>
		</ul>

  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
