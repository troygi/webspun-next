import Link from "next/link"

export default function Nav(props) {

	var home="", 
	portfolio="", 
	playground="", 
	about="",
	
	flipboard="", 
	bankInternet="", 
	bankIntranet="", 
	snap2play="", 
	mcdonalds="", 
	lego="";
	
	if (props.mainAct == "Home") {home = " active"}
	if (props.mainAct == "Portfolio") {portfolio = " active"}
	if (props.mainAct == "Playground") {playground = " active"}
	if (props.mainAct == "About") {about = " active"}
	
	
	
	if (props.active == "Flipboard") {flipboard = " active"}
	if (props.active == "Bank Internet") {bankInternet = " active"}
	if (props.active == "Bank Intranet") {bankIntranet = " active"}
	if (props.active == "Snap2Play") {snap2play = " active"}
	if (props.active == "Mcdonalds") {mcdonalds = " active"}
	if (props.active == "Lego") {lego = " active"}
	
	
	
	return ( 
		<div id="navbar-bottom" className="accordion d-flex flex-column justify-content-end align-items-center fixed-bottom">
			
			{/* 
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSubNav" aria-controls="navbarSubNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			*/}
		
			<div id="navPortfolio" className="navSubNav collapse" data-parent="#navbar-bottom">
				<div className="bg-dark p-4">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/portfolio/flipboard">
								<a className={"nav-link"+flipboard}>Flipboard</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/bank-internet">
								<a className={"nav-link"+bankInternet}>HSBC</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/snap2play">
								<a className={"nav-link"+snap2play}>Snap2play</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/mcdonalds">
								<a className={"nav-link"+mcdonalds}>McDonald's</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/lego">
								<a className={"nav-link"+lego}>Lego</a>
							</Link>
						</li>
					</ul>
				</div>
			 </div>
			 
			 <div id="navPlayGround" className="navSubNav collapse" data-parent="#navbar-bottom">
				<div className="bg-dark p-4">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/playground/">
								<a className={"nav-link"+playground}>Playground Overview</a>
							</Link>
						</li>
					</ul>
				</div>
			 </div>
		
			<nav id="navbar-bottom-main" className="navbar flex-row-off justify-content-center align-items-center navbar-light">
				<ul id="nav-main" className="nav nav-main flex-nowrap nav-pills justify-content-center">
					<li className="nav-item mr-2">
						<a className={"nav-link"+portfolio} data-toggle="collapse" data-target="#navPortfolio" aria-controls="navPortfolio" aria-expanded="false" aria-label="Toggle navigation">Portfolio</a>
					</li>
					
					{/* 
					<li className="nav-item mr-2">
						<a className={"nav-link"+playground} data-toggle="collapse" data-target="#navPlayGround" aria-controls="navPlayGround" aria-expanded="false" aria-label="Toggle navigation">Playground</a>
					</li>
					
					<li className="nav-item mr-2">
						<Link href="/portfolio/flipboard">
							<a className={"nav-link"+portfolio}>Portfolio</a>
						</Link>
					</li>
					*/}
					
					<li className="nav-item mr-2">
						<Link href="/playground/">
							<a className={"nav-link"+playground}>Playground</a>
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
			#navbar-bottom {
				z-index:2;
			}
			
			.navbar {
				width:100%;
				background-color: #69c9ca;
			}
			
			.navSubNav {
				width:100%;
			}
		
		
			.navbar-toggler {
				position:fixed;
				bottom:5px;
				left:0;
				z-index:100;
				border-top-width:0;
				border-bottom-width:0;
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
	
		</div>
	);	
}
