import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';


export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Flipboard">
  	
		<div className="card-portfolio-logo">
			<div className="portfolio-logo portfolio-logo-fb">
				<img src="/img/portfolio/fb-logo.png" alt="Logo" />
			</div>

			{/* <h1>Template Design & Development</h1> */}
		</div>
		
		<Carousel id="carouselExampleControls-2" dataContent="Flipboard Template Design and Development">
			
			<CarouselItem activeState="active">
				<img src="/img/portfolio/natgeo-land.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="National Geographic Screen - Landscape" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/natgeo-port.png" className="d-block carousel-img carousel-img-portrait" style={{width: "auto", height: "90%"}} alt="National Geographic Screen - Portrait" />
			</CarouselItem>
			
			<CarouselItem>
				<img src="/img/portfolio/natgeo-mobile.png" className="d-block carousel-img carousel-img-mobile" style={{width: "auto", height: "90%"}} alt="National Geographic Screen - Mobile" />
			</CarouselItem>
			
		</Carousel>
  	
  	</Layout>

  	</React.Fragment>
		
	)
}
