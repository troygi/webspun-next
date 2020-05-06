import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Bank Intranet">
  	
	<div className="card-portfolio-logo">
		<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/hsbc-logo.png" alt="Logo" />
		</div>

		<h1>
		Bank Intranet - Theme design & development
		</h1>
	</div>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="One HSBC Overview" data-modal-src="img/portfolio/hsbc-intranet-overview.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/hsbc-intranet-overview.png" alt="One HSBC Overview Screen" />
	</figure>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="One HSBC Adoption" data-modal-src="img/portfolio/hsbc-intranet-adoption.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/hsbc-intranet-adoption.png" alt="One HSBC Adoption Screen" />
	</figure>
  	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
