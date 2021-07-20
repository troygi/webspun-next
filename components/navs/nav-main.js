import Link from "next/link"
import { useRouter } from 'next/router'

export default function Nav(props) {

	const router = useRouter();
	const path = router.pathname;

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
								<a className={`nav-link${path === '/portfolio/flipboard' ? ' active' : ''}`}>Flipboard</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/bank-internet">
								<a className={`nav-link${path === '/portfolio/bank-internet' ? ' active' : ''}`}>HSBC</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/snap2play">
								<a className={`nav-link${path === '/portfolio/snap2play' ? ' active' : ''}`}>Snap2play</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/mcdonalds">
								<a className={`nav-link${path === '/portfolio/mcdonalds' ? ' active' : ''}`}>McDonald</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/portfolio/lego">
								<a className={`nav-link${path === '/portfolio/lego' ? ' active' : ''}`}>Lego</a>
							</Link>
						</li>
					</ul>
				</div>
			 </div>
			 
			 <div id="navPlayGround" className="navSubNav collapse" data-parent="#navbar-bottom">
				<div className="bg-dark p-4">
					<ul className="nav flex-column">
						<li className="nav-item">
							<Link href="/playground">
								<a className={`nav-link${path === '/playground' ? ' active' : ''}`}>Playground Overview</a>
							</Link>
						</li>
					</ul>
				</div>
			 </div>
		
			<nav id="navbar-bottom-main" className="navbar flex-row-off justify-content-center align-items-center navbar-light">
				<ul id="nav-main" className="nav nav-main flex-nowrap nav-pills justify-content-center">
					<li className="nav-item mr-2">
						<a className={`nav-link${(path === '/portfolio/flipboard') ||
						(path === '/portfolio/bank-internet') ||
						(path === '/portfolio/snap2play') ||
						(path === '/portfolio/mcdonalds') ||
						(path === '/portfolio/lego')
						 ? ' active' : ''}`} 
						data-toggle="collapse" data-target="#navPortfolio" aria-controls="navPortfolio" aria-expanded="false" aria-label="Toggle navigation">Portfolio</a>
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
						<Link href="/playground">
							<a className={`nav-link${path === '/playground' ? ' active' : ''}`}>Playground</a>
						</Link>
					</li>
					
					<li className="nav-item mr-2">
						<Link href="/about">
							<a className={`nav-link${path === '/about' ? ' active' : ''}`}>About</a>
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
