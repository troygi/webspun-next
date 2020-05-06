import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Flipboard">
  	
		<div className="card-portfolio-logo">
			<div className="portfolio-logo portfolio-logo-fb">
				<img src="/img/portfolio/fb-logo.png" alt="Logo" />
			</div>

			<h1>
			Flipboard - Template design and development 
			</h1>
		</div>

		<figure className="card-portfolio card-portfolio-tablet-landscape" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="National Geographic - Landscape" data-modal-src="img/portfolio/natgeo-land.png" data-modal-size="modal-lg">
			<img src="/img/portfolio/natgeo-land.png" alt="National Geographic Screen - Landscape" />
		</figure>

		<figure className="card-portfolio card-portfolio-tablet-portrait" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="National Geographic - Portrait" data-modal-src="img/portfolio/natgeo-port.png" data-modal-size="modal-lg">
			<img src="/img/portfolio/natgeo-port.png" alt="National Geographic Screen - Portrait" />
		</figure>

		<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="National Geographic - Mobile" data-modal-src="img/portfolio/natgeo-mobile.png" data-modal-size="modal-sm">
			<img src="/img/portfolio/natgeo-mobile.png" alt="National Geographic Screen - Mobile" />
		</figure>
  	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
