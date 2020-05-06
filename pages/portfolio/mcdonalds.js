import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Mcdonalds">
  	
	<div className="card-portfolio-logo">
		<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/mcdonalds-logo.jpg" alt="Logo" />
		</div>

		<h1>
		McDonald's In-store kiosk UI
		</h1>
	</div>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="McDonald's Kiosk" data-modal-src="img/portfolio/mcDonalds-kiosk.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/mcdonalds-kiosk.png" alt="McDonald's Kiosk Screen" />
	</figure>
  	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
