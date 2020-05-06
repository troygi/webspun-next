import Head from 'next/head'
import Layout from '../../components/layout';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Lego">
  	
	<div className="card-portfolio-logo">
		<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/lego-logo.jpg" alt="Logo" />
		</div>
	
		<h1>Lego - Minifigs animations for Star Wars &amp; Johnny Thunder</h1>
	</div>


	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Dooku Saber Draw" data-modal-src="/img/portfolio/dooku-draws-saber.gif" data-modal-size="modal-sm">
		<img src="/img/portfolio/dooku-draws-saber.gif" alt="Dooku Saber Draw Animation" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Dooku Jump" data-modal-src="/img/portfolio/dooku-jump.gif" data-modal-size="modal-sm">
		<img src="/img/portfolio/dooku-jump.gif" alt="Dooku Jump Animation" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Dooku Entrance" data-modal-src="/img/portfolio/entrance_idle.gif" data-modal-size="modal-sm">
		<img src="/img/portfolio/entrance_idle.gif" alt="Dooku Entrance Animation" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Johnny Thunder Airplane Sputter" data-modal-src="/img/portfolio/thunder-sputter.gif" data-modal-size="modal-sm">
		<img src="/img/portfolio/thunder-sputter.gif" alt="Johnny Thunder airplane sputter animation" />
	</figure>

	<figure className="card-portfolio card-portfolio-mobile" data-toggle="modal" data-target="#portfolio-modal" data-modal-title="Johnny Thunder Parachute" data-modal-src="/img/portfolio/chute.gif" data-modal-size="modal-sm">
		<img src="/img/portfolio/chute.gif" alt="Johnny Thunder parachute animation" />
	</figure>
  	
  	</Layout>
  
	<style jsx>{`

	`}</style>

  	</React.Fragment>
		
	)
}
