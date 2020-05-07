import Link from "next/link"

export default function Nav(props) {

	var home="", 
	portfolio="", 
	services="", 
	about="";
	
	if (props.mainAct == "Home") {home = " active"}
	if (props.mainAct == "Portfolio") {portfolio = " active"}
	if (props.mainAct == "Services") {services = " active"}
	if (props.mainAct == "About") {about = " active"}
	
	return ( 
		<React.Fragment>
		
		{/* 
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		*/}
		
		<nav id="navbar-bottom" className="navbar flex-row justify-content-center align-items-center navbar-light">
			<ul id="nav-main" className="nav nav-main flex-nowrap nav-pills justify-content-center">
				<li className="nav-item mr-2">
					<Link href="/portfolio/flipboard">
						<a className={"nav-link"+portfolio}>Portfolio</a>
					</Link>
				</li>
				<li className="nav-item mr-2">
					<Link href="/services">
						<a className={"nav-link"+services}>Services</a>
					</Link>
				</li>
				<li className="nav-item mr-2">
					<Link href="/about">
						<a className={"nav-link"+about}>About</a>
					</Link>
				</li>
			</ul>
		</nav>
		
		
		<style jsx>{`
		
		
		.navbar-toggler {
			position:fixed;
			bottom:5px;
			left:0;
			z-index:100;
			border-top-width:0;
		  	border-bottom-width:0;
		}

		#navbar-bottom {
			background-color: #69c9ca;
			position:fixed;
			bottom:0;
			left:0;right:0;
			z-index:2;
		}

		.nav-pills .nav-link {
			color: #f8f9fa;
			font-size:1rem;
			padding:.3rem .8rem;
			border:1px solid transparent;
			-webkit-transition: all .4s;
			transition: all .4s;
		}

		.nav-pills .nav-link.active,
		.nav-pills .nav-link:hover, 
		.nav-pills .nav-link:focus {
			color: #f8f9fa;
			background-color: #ff9933;
			border-color: #f8f9fa;
		}

		`}</style>
	
		</React.Fragment>
	);	
}
