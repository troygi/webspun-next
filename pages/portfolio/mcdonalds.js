import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';


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
	
	<Carousel id="carouselExampleControls-2">
			
		<CarouselItem activeState="active">
			<img src="/img/portfolio/mcdonalds-kiosk.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="McDonald's Kiosk Screen" />
		</CarouselItem>
		
	</Carousel>

  	</Layout>
  	
  	</React.Fragment>
		
	)
}
