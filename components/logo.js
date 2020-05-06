const Logo = props => (

<div id="logo" className={props.page}>
	<a id="navbar-brand" className="navbar-brand" href="/">
		<div id="logo-text"><img src="/img/logo-text.svg" alt="Webspun Creative" /></div>
		<div className="logo-comets"></div>
	</a>

	<style jsx>{`
	#logo {
		width:150px;
		height:76px;
		margin:0 auto;
		overflow:hidden;
	}

	#navbar-brand {
		overflow:hidden;
		width:150px;
		height:220px;
		padding:0;
		margin:3px 0 15px;
		position:relative;
		transform-origin: top center;
	
		-ms-transform: scale(.5, .5);
		-webkit-transform: scale(.5, .5);
		transform: scale(.5, .5);
	}

	#logo-text {
		width:76%;
		margin:41px auto 0;
	}
	#logo-text img {width:100%}


	.logo-comets {
		background:transparent url(/img/logo-comets.png) no-repeat center center;
		background-size:100% auto;
		width:140px;
		height:140px; 
		position:absolute;
		top:3px;
		left:5px;
	
		-ms-transform: rotate(0deg);
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);

		-ms-transition: all .5s;
		-webkit-transition: all .5s;
		transition: all .5s;
	}

	.logo-comets:hover {
		-ms-transform: rotate(360deg);
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}

	#logo.Home {
		height:220px;
		overflow:visible;
	}

	#logo.Home #navbar-brand {
		overflow:hidden;
		width:150px;
		height:220px;
		padding:0;
		margin:3px 0 15px;
		position:relative;
		transform-origin: top center;
	
		-ms-transform: scale(1, 1);
		-webkit-transform: scale(1, 1);
		transform: scale(1, 1);
	}
	`}</style>
</div>
)

export default Logo
