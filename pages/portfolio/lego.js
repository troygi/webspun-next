import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';


export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Lego">
  	
	<div className="card-portfolio-logo">
		<div className="portfolio-logo portfolio-logo-fb">
			<img src="/img/portfolio/lego-logo.jpg" alt="Logo" />
		</div>
	
		{/* <h1>Minifigs animations for Star Wars &amp; Johnny Thunder</h1> */}
	</div>
	
	
	<Carousel id="carouselExampleControls" dataContent="Lego Minifigs animations for Star Wars &amp; Johnny Thunder">
		
		<CarouselItem activeState="active">
			<img src="/img/portfolio/dooku-draws-saber.gif" className="d-block carousel-img carousel-img-mobile" style={{width: "60%", height: "auto"}} alt="Dooku Saber Draw Animation" />
		</CarouselItem>
		
		<CarouselItem>
			<img src="/img/portfolio/dooku-jump.gif" className="d-block carousel-img carousel-img-mobile" style={{width: "60%", height: "auto"}} alt="Dooku Jump Animation" />
		</CarouselItem>
		
		<CarouselItem>
			 <img src="/img/portfolio/entrance_idle.gif" className="d-block carousel-img carousel-img-mobile" style={{width: "60%", height: "auto"}} alt="Dooku Entrance Animation" />
		</CarouselItem>
		
		<CarouselItem>
			<img src="/img/portfolio/thunder-sputter.gif" className="d-block carousel-img carousel-img-mobile" style={{width: "60%", height: "auto"}} alt="Johnny Thunder airplane sputter animation" />
		</CarouselItem>
		
		<CarouselItem>
			<img src="/img/portfolio/chute.gif" className="d-block carousel-img carousel-img-mobile" style={{width: "60%", height: "auto"}} alt="Johnny Thunder parachute animation" />
		</CarouselItem>

	</Carousel>

  	</Layout>
  
  	</React.Fragment>
		
	)
}
