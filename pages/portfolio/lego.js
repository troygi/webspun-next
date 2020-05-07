import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';


const divStyle = {
  height: '300px'
};

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
	
	
	<Carousel id="carouselExampleControls">
		
		<CarouselItem activeState="active" style={divStyle}>
			<img src="/img/portfolio/dooku-draws-saber.gif" className="d-block carousel-img carousel-img-mobile" alt="Dooku Saber Draw Animation" />
		</CarouselItem>
		
		<CarouselItem style={divStyle}>
			<img src="/img/portfolio/dooku-jump.gif" className="d-block carousel-img carousel-img-mobile" alt="Dooku Jump Animation" />
		</CarouselItem>
		
		<CarouselItem style={divStyle}>
			 <img src="/img/portfolio/entrance_idle.gif" className="d-block carousel-img carousel-img-mobile" alt="Dooku Entrance Animation" />
		</CarouselItem>
		
		<CarouselItem style={divStyle}>
			<img src="/img/portfolio/thunder-sputter.gif" className="d-block carousel-img carousel-img-mobile" alt="Johnny Thunder airplane sputter animation" />
		</CarouselItem>
		
		<CarouselItem style={divStyle}>
			<img src="/img/portfolio/chute.gif" className="d-block carousel-img carousel-img-mobile" alt="Johnny Thunder parachute animation" />
		</CarouselItem>

	</Carousel>

  	</Layout>
  
  	</React.Fragment>
		
	)
}
