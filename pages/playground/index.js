import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link"


export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Playground">
  	
		<div className="card-portfolio-logo">
			<h1>
			Playground - Demos and Experimentation 
			</h1>
		</div>
		
		<div>
		<Link href="./cube">
			<a>Cube</a>
		</Link>
		</div>
		
		<div>
		<Link href="./cube2">
			<a>Cube2</a>
		</Link>
		</div>
  	
  	</Layout>

  	</React.Fragment>
		
	)
}
