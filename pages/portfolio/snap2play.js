import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Snap2Play">
  	
	<div className="card-portfolio-logo">
		<h1>
		Snap2play - Web site design & development
		</h1>
	</div>

	<figure className="card-portfolio card-portfolio-desktop" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Home" data-modal-src="img/portfolio/snap-2-play.png" data-modal-size="modal-lg">
		<img src="/img/portfolio/snap-2-play.png" alt="Home Screen" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Home - Mobile" data-modal-src="img/portfolio/snap-2-play-mobile.png" data-modal-size="modal-sm">
		<img src="/img/portfolio/snap-2-play-mobile.png" alt="Home Screen - Mobile" />
	</figure>
  	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
