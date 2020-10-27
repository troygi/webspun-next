import Head from 'next/head'
import Layout from '../components/layout';
import Link from "next/link"

export default function Home() {

	return (
  
  	<React.Fragment>
  	
  	<Layout page="About">
  	
		<h1>Icarus</h1>
	
		<p>
		VR Spaceship
		</p>
		
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
			<li>
				<Link href="/playground/icarus-blastoff">
					<a>Icarus Blastoff</a>
				</Link>
			</li>
		</ul>

  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
