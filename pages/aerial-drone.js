import Head from 'next/head'
import Layout from '../components/layout';
import Link from "next/link"

export default function Home() {

	return (
  
  	<React.Fragment>
  	
  	<Layout page="About">
  	
		<h1>Aerial Drone</h1>
	
		<p>
		Aerial Drone ...
		</p>
		
		<ul className="list">
			<li>
				<Link href="/playground/drone">
					<a>Aerial Drone</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/drone-vr">
					<a>Aerial Drone (VR)</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/drone-vr-raycaster">
					<a>Aerial Drone (VR - Raycaster)</a>
				</Link>
			</li>
			<li>
				<Link href="/playground/drone-vr-raycaster-hook">
					<a>Aerial Drone (VR - Raycaster - hook)</a>
				</Link>
			</li>
		</ul>
		
  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
