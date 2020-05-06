import Head from "next/head"
import NavMain from "../components/navs/nav-main"
import Logo from "../components/logo"
import FooterScripts from "../components/footer-scripts"

const Layout = props => (
<React.Fragment>
	<Head>
	  <title>Webspun</title>
	  <link rel="icon" href="/favicon.ico" />
	  <link rel="stylesheet" href="https://use.typekit.net/oeb1sbe.css" />
	</Head>

	<main className="container d-flex flex-column justify-content-center">
		<Logo page="Home" />
		{props.children}
	</main>
	
	<NavMain {...props} />
	
	<FooterScripts />
	
	
	<style jsx global>{`
    html {height:100%;}
    
    body {
		text-align: center;
		height:100%;
		min-height:100%; 
	}   
	
	main.container {
		max-width:700px;
		position:absolute;
		top:0;
		right:0;
		bottom:30%;
		left:0;
	}
	
	.logo-comets {
		animation-name: wheel;
		animation-duration: 20s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes wheel {
		0% {transform: rotate(0deg)}
		100% {transform: rotate(360deg)}
	}
    `}</style>
    
</React.Fragment>
)

export default Layout
