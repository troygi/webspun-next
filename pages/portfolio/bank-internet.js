import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Bank Internet">
  	
	<div className="card-portfolio-logo">
	<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/hsbc-logo.png" alt="Logo" />
		</div>

		<h1>
		Bank Internet - Theme design & development
		</h1>
	</div>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Personal Banking" data-modal-src="img/portfolio/hsbc-internet-home.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/hsbc-internet-home.png" alt="Personal Banking Screen" />
	</figure>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Your Accounts" data-modal-src="img/portfolio/hsbc-internet-accounts.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/hsbc-internet-accounts.png" alt="Your Accounts Screen" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Personal Banking - Mobile" data-modal-src="img/portfolio/hsbc-mobile-menu.png" data-modal-size="modal-sm">
		<img src="/img/portfolio/hsbc-mobile-menu.png" alt="Personal Banking Screen - Mobile" />
	</figure>
	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
