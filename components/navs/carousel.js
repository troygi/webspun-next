const Carousel = props => (
  
<div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
	<div className="carousel-inner">

	{props.children}

	</div>

	<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
	<span className="sr-only">Previous</span>
	</a>
	<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
	<span className="carousel-control-next-icon" aria-hidden="true"></span>
	<span className="sr-only">Next</span>
	</a>
  
  
	<style jsx global>{`

	.carousel-item-box {
		height:400px;
	}

	img.carousel-img {
		width:auto;
		height:80%;
		border:1px solid rgb(100,100,100);
		margin:0 auto;
	}

	// Small devices (landscape phones, 576px and up)
	@media (min-width: 576px) {
		.carousel-item-box {
			height:500px;
		}
	}

	// Medium devices (tablets, 768px and up)
	@media (min-width: 768px) {
		.carousel-item-box {
			height:600px;
		}
	}

	// Large devices (desktops, 992px and up)
	@media (min-width: 992px) {
		.carousel-item-box {
			height:700px;
		}
	}

	`}</style>

  
</div>  
 
)
export default Carousel










