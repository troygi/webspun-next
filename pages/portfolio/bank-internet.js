import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';

export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Bank Internet">
  	
	<div className="card-portfolio-logo">
	<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/hsbc-logo.png" alt="Logo" />
		</div>

		{/*<h1>
		Theme Design & Development
		</h1>*/}
	</div>
	
		<Carousel id="carouselExampleControls">
		
			<CarouselItem activeState="active">
				<img src="/img/portfolio/hsbc-internet-home.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="Personal Banking Screen" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/hsbc-internet-accounts.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="Your Accounts Screen" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/hsbc-intranet-overview.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="One HSBC Overview Screen" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/hsbc-intranet-overview.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="One HSBC Adoption Screen" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/hsbc-mobile-menu.png" className="d-block carousel-img carousel-img-mobile" style={{width: "auto", height: "90%"}} alt="Personal Banking Screen - Mobile" />
			</CarouselItem>
			
		</Carousel>

	
  	</Layout>
  
	
  	</React.Fragment>
		
	)
}
