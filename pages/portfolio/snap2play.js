import Head from 'next/head'
import Layout from '../../components/layout';
import Carousel from '../../components/navs/carousel';
import CarouselItem from '../../components/navs/carousel-item';


export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Snap2Play">
  	
	<div className="card-portfolio-logo">
		<h1>
		Snap2play - Web site design & development
		</h1>
	</div>
	
	<Carousel id="carouselExampleControls">
	
		<CarouselItem activeState="active">
			<img src="/img/portfolio/snap-2-play.png" className="d-block carousel-img" style={{width: "90%", height: "auto"}} alt="Home Screen" />
		</CarouselItem>
		
		<CarouselItem>
			<img src="/img/portfolio/snap-2-play-mobile.png" className="d-block carousel-img carousel-img-mobile" style={{width: "auto", height: "90%"}} alt="Home Screen - Mobile" />
		</CarouselItem>
		
	</Carousel>
	
  	</Layout>
  

  	</React.Fragment>
		
	)
}
