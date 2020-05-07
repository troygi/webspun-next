import Link from "next/link"

export default function Nav(props) {

	var 
	flipboard="", 
	bankInternet="", 
	bankIntranet="", 
	snap2play="", 
	mcdonalds="", 
	lego="";
	
	if (props.active == "Flipboard") {flipboard = " active"}
	if (props.active == "Bank Internet") {bankInternet = " active"}
	if (props.active == "Bank Intranet") {bankIntranet = " active"}
	if (props.active == "Snap2Play") {snap2play = " active"}
	if (props.active == "Mcdonalds") {mcdonalds = " active"}
	if (props.active == "Lego") {lego = " active"}
	
	return ( 
		<React.Fragment>
		
		<nav id="nav-portfolio" className="nav nav-secondary justify-content-center">
			
			<Link href="/portfolio/flipboard">
			<a className={"nav-link"+flipboard}>Flipboard</a>
			</Link>
			
			<Link href="/portfolio/bank-internet">
			<a className={"nav-link"+bankInternet}>HSBC</a>
			</Link>
			
			<Link href="/portfolio/snap2play">
			<a className={"nav-link"+snap2play}>Snap2play</a>
			</Link>
			
			<Link href="/portfolio/mcdonalds">
			<a className={"nav-link"+mcdonalds}>McDonald's</a>
			</Link>
			
			<Link href="/portfolio/lego">
			<a className={"nav-link"+lego}>Lego</a>
			</Link>
			
		</nav>
		
		<style jsx>{`
		
		#nav-portfolio {
			width:100%;
			overflow:auto;
			white-space: nowrap;
			flex-wrap: nowrap;
			
			/* Hide scrollbar for IE and Edge */
			-ms-overflow-style: none;
		}
		
		#nav-portfolio::-webkit-scrollbar {
		  display: none;
		}

		.nav-link {
			font-size:1.1rem;
			padding:.5rem .8rem;
			position:relative;
			-webkit-transition: all .4s;
			transition: all .4s;
		}
		
		.nav-link ::after {
			content:'';
			background-color:transparent;
			height:3px;
			border-radius:5px;
			position:absolute;
			bottom:0;
			left:10px;
			right:10px;
		}

		.nav-link:hover, 
		.nav-link:focus {color: #ff9933;}

		.nav-link.active::after,
		.nav-link:hover:after,
		.nav-link:hover:focus {
			background-color: #69c9ca;
		}

		`}</style>
	
		</React.Fragment>
	);	
}
