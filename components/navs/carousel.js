import React, { useState,  useEffect} from 'react';

export default function Carousel(props) {

	useEffect(() => {
		$('[data-toggle="popover"]').popover()
	});

	return (
	<div className="carousel-box position-relative">  
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
			
			<button id="btn-info" type="button" className="btn btn-secondary position-absolute rounded-circle" data-container="body" data-toggle="popover" data-placement="top" data-content={props.dataContent}>
			<svg class="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
			  <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/>
			  <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
			  <circle cx="8" cy="4.5" r="1"/>
			</svg>
			</button>
  
  
			<style jsx global>{`
	
			.carousel {
				max-width: 600px;
				margin: 0 auto; 
				background-color: rgb(200,200,200);
			}

			.carousel-item-box {
				height: 450px;
			}

			img.carousel-img {
				border: 1px solid rgb(100,100,100);
				margin: 0 auto;
			}
			
			#btn-info {
				padding:0;
				width: 40px;
				height: 40px;
				bottom: 10px;
				right: 10px;
				z-index: 2;
				background-color: transparent;
				border-width: 0;
			}
			#btn-info svg {
				width: 25px;
				height: 25px; 
				color: #000;
			}


			// Small devices (landscape phones, 576px and up)
			@media (min-width: 576px) {
				.carousel-item-box {
					height: 620px;
				}
			}

			// Medium devices (tablets, 768px and up)
			@media (min-width: 768px) {
				.carousel-item-box {
					height: 600px;
				}
			}
			`}</style>
		</div>
	</div>   
	)
}











